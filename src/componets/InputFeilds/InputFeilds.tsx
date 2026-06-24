import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  KeyboardTypeOptions, 
  TextInputProps,
  TouchableOpacity 
} from 'react-native';
import * as Icons from 'lucide-react-native';

interface InputFieldProps {
  name: string;
  label?: string;
  inputType?: TextInputProps['secureTextEntry']; 
  keyboardType?: KeyboardTypeOptions; 
  icon?: keyof typeof Icons | React.ComponentType<{ size?: number; color?: string }>;
  placeholder?: string;
  placeholderTextColor?: string;
  
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  error?: string;
  
  formik?: {
    values: Record<string, any>;
    errors: Record<string, any>;
    touched: Record<string, any>;
    handleChange: (name: string) => (text: string) => void;
    handleBlur: (name: string) => (e: any) => void;
  };
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  inputType = false, 
  keyboardType = 'default',
  icon,
  placeholder,
  placeholderTextColor = '#A0ABC0', 
  value,
  onChangeText,
  onBlur,
  error,
  formik,
}) => {
  // New state to manage password visibility toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputValue = formik ? formik.values[name] : value;
  const inputOnChangeText = formik ? formik.handleChange(name) : onChangeText;
  const inputOnBlur = formik ? formik.handleBlur(name) : onBlur;
  const inputError = formik ? (formik.touched[name] && formik.errors[name] ? formik.errors[name] : undefined) : error;

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      const LucideIcon = Icons[icon] as React.ComponentType<{ size?: number; color?: string }>;
      return LucideIcon ? <LucideIcon size={20} color="#9ca3af" /> : null;
    }

    const CustomIcon = icon;
    return <CustomIcon size={20} color="#9ca3af" />;
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={[
        styles.inputWrapper, 
        inputError ? styles.borderError : styles.borderDefault
      ]}>
        {icon && (
          <View style={styles.iconContainer}>
            {renderIcon()}
          </View>
        )}
        
        <TextInput
          style={[
            styles.input, 
            icon ? styles.inputWithIcon : styles.inputWithoutIcon,
            inputType ? styles.inputWithToggle : null // Gives room for the toggle button
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          // If inputType is true (password), secure text entry depends on visibility state
          secureTextEntry={inputType ? !isPasswordVisible : false}
          keyboardType={keyboardType}
          value={inputValue}
          onChangeText={inputOnChangeText}
          onBlur={inputOnBlur}
          autoCapitalize="none"
        />

        {/* Password Visibility Toggle Button */}
        {inputType && (
          <TouchableOpacity 
            style={styles.toggleContainer} 
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            {isPasswordVisible ? (
              <Icons.EyeOff size={20} color="#9ca3af" />
            ) : (
              <Icons.Eye size={20} color="#9ca3af" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {inputError && (
        <Text style={styles.errorText}>{inputError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7B8AA0',

    marginBottom: 6,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,

    borderRadius: 16,
    height: 56,
  },

  borderDefault: {
    borderColor: '#d1d5db', 
  },
  borderError: {
    borderColor: '#ef4444', 
  },
  iconContainer: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#111827', 
borderRadius: 16,
    backgroundColor: '#F0F4F8',
  },
  inputWithIcon: {
    paddingLeft: 40,
    paddingRight: 12,
  },
  inputWithoutIcon: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  inputWithToggle: {
    paddingRight: 44, // Extra right-padding keeps text from overlapping the eye icon
  },
  toggleContainer: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    color: '#ef4444', 
    marginTop: 4,
  },
});


// {/* 1. Standard State + Icon by Name string */}
//       <InputField
//         name="username"
//         label="Username"
//         placeholder="Enter username"
//         icon="User" // passed as string
//         value={username}
//         onChangeText={setUsername}
//       />

//       {/* 2. Formik integration + Icon Component reference */}
//       <InputField
//         name="email"
//         label="Email Address"
//         placeholder="name@domain.com"
//         keyboardType="email-address"
//         icon={Mail} // passed as component reference
//         formik={formik}
//       />