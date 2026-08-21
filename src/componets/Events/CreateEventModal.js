import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { X, Calendar, ChevronDown, Image as ImageIcon, Check } from 'lucide-react-native';
import { theme } from '../../theme/theme';

const EVENT_TYPES = ['Online', 'In-Person', 'Hybrid'];
const CURRENCIES = ['USD', 'EUR', 'GBP', 'PKR', 'NGN'];

const EMPTY_FORM = {
  title: '',
  description: '',
  eventType: 'Online',
  startDateTime: '',
  endDateTime: '',
  meetingLink: '',
  platform: '',
  maxAttendees: '',
  isFree: true,
  currency: 'USD',
  ticketPrice: '',
  coverImageName: '',
};

const URL_PATTERN = /^https?:\/\/.+/i;

// Simple inline dropdown — the project has no picker library installed yet,
// so this renders an in-place option list rather than a native picker.
const SelectField = ({ label, value, options, onChange, error }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.fieldBlock}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.selectTrigger, error && styles.inputError]}
        onPress={() => setOpen((prev) => !prev)}
        activeOpacity={0.7}
      >
        <Text style={styles.selectTriggerText}>{value}</Text>
        <ChevronDown size={18} color={theme.colors.textMuted} />
      </TouchableOpacity>

      {open && (
        <View style={styles.optionsList}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionRow}
              onPress={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              <Text style={styles.optionText}>{option}</Text>
              {option === value && <Check size={16} color={theme.colors.primary} />}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

// Plain text entry styled like a date/time picker field. Wire in
// @react-native-community/datetimepicker (or similar) and swap the
// TouchableOpacity's onPress to open it — the field shape is ready for it.
const DateField = ({ label, value, placeholder, onChange, error }) => {
  return (
    <View style={styles.fieldBlock}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.dateTrigger, error && styles.inputError]}>
        <Calendar size={18} color={theme.colors.primary} />
        <TextInput
          style={styles.dateInput}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textMuted}
          value={value}
          onChangeText={onChange}
        />
        <ChevronDown size={18} color={theme.colors.textMuted} />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const CreateEventModal = ({ visible, onClose, onCreate }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const requiresMeetingDetails = form.eventType !== 'In-Person';

  const validate = () => {
    const nextErrors = {};

    if (!form.title.trim()) {
      nextErrors.title = 'Event title is required.';
    } else if (form.title.trim().length < 3) {
      nextErrors.title = 'Title should be at least 3 characters.';
    }

    if (!form.description.trim()) {
      nextErrors.description = 'Tell attendees what this event is about.';
    } else if (form.description.trim().length < 10) {
      nextErrors.description = 'Description should be at least 10 characters.';
    }

    if (!form.startDateTime.trim()) {
      nextErrors.startDateTime = 'Start date and time is required.';
    }

    if (
      form.endDateTime.trim() &&
      form.startDateTime.trim() &&
      form.endDateTime.trim() === form.startDateTime.trim()
    ) {
      nextErrors.endDateTime = 'End time should be after the start time.';
    }

    if (requiresMeetingDetails) {
      if (!form.meetingLink.trim()) {
        nextErrors.meetingLink = 'Meeting link is required for online/hybrid events.';
      } else if (!URL_PATTERN.test(form.meetingLink.trim())) {
        nextErrors.meetingLink = 'Enter a valid link starting with http:// or https://';
      }

      if (!form.platform.trim()) {
        nextErrors.platform = 'Let attendees know the platform (Zoom, Meet, etc.).';
      }
    }

    if (form.maxAttendees.trim()) {
      const numeric = Number(form.maxAttendees.trim());
      if (!Number.isInteger(numeric) || numeric <= 0) {
        nextErrors.maxAttendees = 'Enter a positive whole number, or leave blank for unlimited.';
      }
    }

    if (!form.isFree) {
      if (!form.currency.trim()) {
        nextErrors.currency = 'Choose a currency.';
      }

      const price = Number(form.ticketPrice.trim());
      if (!form.ticketPrice.trim()) {
        nextErrors.ticketPrice = 'Ticket price is required for paid events.';
      } else if (Number.isNaN(price) || price <= 0) {
        nextErrors.ticketPrice = 'Enter a price greater than 0.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onCreate?.({
      title: form.title.trim(),
      description: form.description.trim(),
      eventType: form.eventType,
      startDateTime: form.startDateTime.trim(),
      endDateTime: form.endDateTime.trim() || null,
      meetingLink: form.meetingLink.trim() || null,
      platform: form.platform.trim() || null,
      maxAttendees: form.maxAttendees.trim() ? Number(form.maxAttendees.trim()) : null,
      isFree: form.isFree,
      currency: form.isFree ? null : form.currency,
      ticketPrice: form.isFree ? null : Number(form.ticketPrice.trim()),
      coverImageName: form.coverImageName || null,
    });

    setForm(EMPTY_FORM);
    setErrors({});
  };

  const handleClose = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    onClose?.();
  };

  const handleUploadCover = () => {
    // Hook up expo-image-picker / react-native-image-picker here.
    // For now this just marks a placeholder file as attached.
    setField('coverImageName', form.coverImageName ? '' : 'cover-image.jpg');
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.backdrop}>
        <TouchableOpacity style={styles.backdropTouchable} activeOpacity={1} onPress={handleClose} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.sheet}
        >
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Create Event</Text>
            <TouchableOpacity onPress={handleClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <X size={22} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.sheetBody}
            contentContainerStyle={styles.sheetBodyContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={[styles.input, errors.title && styles.inputError]}
                placeholder="Event title"
                placeholderTextColor={theme.colors.textMuted}
                value={form.title}
                onChangeText={(text) => setField('title', text)}
              />
              {errors.title ? <Text style={styles.errorText}>{errors.title}</Text> : null}
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, styles.textArea, errors.description && styles.inputError]}
                placeholder="What is this event about?"
                placeholderTextColor={theme.colors.textMuted}
                value={form.description}
                onChangeText={(text) => setField('description', text)}
                multiline
                numberOfLines={4}
              />
              {errors.description ? <Text style={styles.errorText}>{errors.description}</Text> : null}
            </View>

            <SelectField
              label="Event Type"
              value={form.eventType}
              options={EVENT_TYPES}
              onChange={(value) => setField('eventType', value)}
              error={errors.eventType}
            />

            <DateField
              label="Start Date & Time"
              value={form.startDateTime}
              placeholder="Select start date and time"
              onChange={(text) => setField('startDateTime', text)}
              error={errors.startDateTime}
            />

            <DateField
              label="End Date & Time (optional)"
              value={form.endDateTime}
              placeholder="Select end date and time"
              onChange={(text) => setField('endDateTime', text)}
              error={errors.endDateTime}
            />

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Meeting Link</Text>
              <TextInput
                style={[styles.input, errors.meetingLink && styles.inputError]}
                placeholder="https://..."
                placeholderTextColor={theme.colors.textMuted}
                value={form.meetingLink}
                onChangeText={(text) => setField('meetingLink', text)}
                autoCapitalize="none"
                keyboardType="url"
              />
              {errors.meetingLink ? <Text style={styles.errorText}>{errors.meetingLink}</Text> : null}
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Platform</Text>
              <TextInput
                style={[styles.input, errors.platform && styles.inputError]}
                placeholder="Zoom, Meet, etc."
                placeholderTextColor={theme.colors.textMuted}
                value={form.platform}
                onChangeText={(text) => setField('platform', text)}
              />
              {errors.platform ? <Text style={styles.errorText}>{errors.platform}</Text> : null}
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Max Attendees</Text>
              <TextInput
                style={[styles.input, errors.maxAttendees && styles.inputError]}
                placeholder="Unlimited"
                placeholderTextColor={theme.colors.textMuted}
                value={form.maxAttendees}
                onChangeText={(text) => setField('maxAttendees', text)}
                keyboardType="number-pad"
              />
              {errors.maxAttendees ? <Text style={styles.errorText}>{errors.maxAttendees}</Text> : null}
            </View>

            <View style={styles.freeRow}>
              <Text style={styles.freeLabel}>Free event</Text>
              <Switch
                value={form.isFree}
                onValueChange={(value) => setField('isFree', value)}
                trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                thumbColor={theme.colors.card}
              />
            </View>

            {!form.isFree && (
              <>
                <SelectField
                  label="Currency"
                  value={form.currency}
                  options={CURRENCIES}
                  onChange={(value) => setField('currency', value)}
                  error={errors.currency}
                />

                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>Ticket Price</Text>
                  <TextInput
                    style={[styles.input, errors.ticketPrice && styles.inputError]}
                    placeholder="0.00"
                    placeholderTextColor={theme.colors.textMuted}
                    value={form.ticketPrice}
                    onChangeText={(text) => setField('ticketPrice', text)}
                    keyboardType="decimal-pad"
                  />
                  {errors.ticketPrice ? <Text style={styles.errorText}>{errors.ticketPrice}</Text> : null}
                </View>
              </>
            )}

            <TouchableOpacity style={styles.uploadButton} onPress={handleUploadCover}>
              <ImageIcon size={18} color={theme.colors.primary} />
              <Text style={styles.uploadButtonText}>
                {form.coverImageName ? form.coverImageName : 'Upload cover image'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Create Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default CreateEventModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    justifyContent: 'flex-end',
  },
  backdropTouchable: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    backgroundColor: theme.colors.card,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    maxHeight: '90%',
    paddingTop: theme.spacing.lg,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  sheetTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text,
  },
  sheetBody: {
    paddingHorizontal: theme.spacing.lg,
  },
  sheetBodyContent: {
    paddingBottom: theme.spacing.xxl,
  },
  fieldBlock: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.secondaryText,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    marginBottom: theme.spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
    fontSize: 15,
    color: theme.colors.inputText,
    backgroundColor: theme.colors.card,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: theme.colors.danger,
  },
  errorText: {
    fontSize: 12,
    color: theme.colors.danger,
    marginTop: 4,
  },
  selectTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
  },
  selectTriggerText: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
  },
  optionsList: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.xs,
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  optionText: {
    fontSize: 14,
    color: theme.colors.text,
  },
  dateTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  dateInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: theme.colors.inputText,
  },
  freeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  freeLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    borderRadius: theme.radius.lg,
    paddingVertical: 14,
    marginBottom: theme.spacing.lg,
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: theme.colors.primaryText,
    fontWeight: '700',
    fontSize: 16,
  },
});
