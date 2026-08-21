import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Share2,
  Calendar,
  Clock,
  Pencil,
  Trash2,
  Send,
} from 'lucide-react-native';

import { theme } from '../../theme/theme';
import { styles } from './style';
import { ARTICLE_FEATURES, MOCK_ARTICLE } from './config';
import RelatedArticleCard from '../../componets/Articles/RelatedArticleCard';
import TrendingListItem from '../../componets/Articles/TrendingListItem';

// NOTE: assumes src/data/articlesData.json already exists in the project
// (as seen in your file structure) with objects shaped like:
// { id, author, title, excerpt, category, image, readTime, date }
import articlesData from '../../data/articlesData.json';
import trendingData from '../../data/trendingData.json';

const ArticleDetailScreen = ({ navigation, route }) => {
  const article = route?.params?.article ?? MOCK_ARTICLE;
  const isOwner = article.isOwner ?? false;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes ?? 0);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState(article.comments ?? []);
  const [commentText, setCommentText] = useState('');

  // Related: same category first, then fill up to 3 with anything else.
  const relatedArticles = useMemo(() => {
    const pool = articlesData.filter((a) => a.id !== article.id);
    const sameCategory = pool.filter((a) => a.category === article.category);
    const others = pool.filter((a) => a.category !== article.category);
    return [...sameCategory, ...others].slice(0, 3);
  }, [article.id, article.category]);

  const trending = useMemo(() => trendingData.slice(0, 5), []);

  const handleToggleLike = () => {
    setLiked((prev) => {
      setLikeCount((count) => (prev ? Math.max(0, count - 1) : count + 1));
      return !prev;
    });
  };

  const handleToggleBookmark = () => setBookmarked((prev) => !prev);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${article.title} — via Free LinkUp`,
      });
    } catch (e) {
      // no-op: user cancelled or share failed silently
    }
  };

  const handleAddComment = () => {
    const trimmed = commentText.trim();
    if (!trimmed) return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        author: 'You',
        text: trimmed,
        date: 'Just now',
      },
    ]);
    setCommentText('');
  };

  const handleRelatedPress = (item) => {
    navigation.push('ArticleDetail', { article: item });
  };

  const handleEdit = () => {
    navigation.navigate('EditArticle', { article });
  };

  const handleDelete = () => {
    // Wire up to your delete confirmation / API call.
    navigation.goBack();
  };

  const showActionBar =
    ARTICLE_FEATURES.showLike ||
    ARTICLE_FEATURES.showComment ||
    ARTICLE_FEATURES.showBookmark ||
    ARTICLE_FEATURES.showShare;

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Article</Text>
        <TouchableOpacity style={styles.headerIconBtn}>
          <MoreHorizontal size={22} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: article.image }} style={styles.heroImage} />

        <Text style={styles.title}>{article.title}</Text>

        <View style={styles.authorRow}>
          <View style={styles.authorLeft}>
            {article.authorAvatar ? (
              <Image source={{ uri: article.authorAvatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarFallback}>
                <Text style={styles.avatarInitial}>{article.author?.[0] ?? '?'}</Text>
              </View>
            )}
            <View>
              <Text style={styles.authorName}>{article.author}</Text>
              <Text style={styles.authorRole}>{article.authorRole ?? 'Member'}</Text>
              <View style={styles.metaRow}>
                <Calendar size={13} color={theme.colors.textMuted} />
                <Text style={styles.metaText}>{article.date}</Text>
                <Clock size={13} color={theme.colors.textMuted} style={styles.metaIconSpacer} />
                <Text style={styles.metaText}>{article.readTime}</Text>
              </View>
            </View>
          </View>

          {isOwner && ARTICLE_FEATURES.showEditDelete && (
            <View style={styles.ownerActions}>
              <TouchableOpacity style={styles.iconBtn} onPress={handleEdit}>
                <Pencil size={18} color={theme.colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconBtn, styles.deleteBtn]} onPress={handleDelete}>
                <Trash2 size={18} color={theme.colors.danger} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbMuted}>{(article.category ?? '').toUpperCase()}</Text>
          <Text style={styles.breadcrumbSep}>›</Text>
          <Text style={styles.breadcrumbActive}>{(article.subCategory ?? '').toUpperCase()}</Text>
        </View>

        <Text style={styles.body}>{article.body ?? article.excerpt}</Text>

        {showActionBar && (
          <View style={styles.actionBar}>
            {ARTICLE_FEATURES.showLike && (
              <TouchableOpacity style={styles.actionItem} onPress={handleToggleLike}>
                <ThumbsUp
                  size={18}
                  color={liked ? theme.colors.primary : theme.colors.textMuted}
                  fill={liked ? theme.colors.primary : 'none'}
                />
                <Text style={[styles.actionText, liked && styles.actionTextActive]}>
                  {likeCount}
                </Text>
              </TouchableOpacity>
            )}

            {ARTICLE_FEATURES.showComment && (
              <View style={styles.actionItem}>
                <MessageCircle size={18} color={theme.colors.textMuted} />
                <Text style={styles.actionText}>{comments.length}</Text>
              </View>
            )}

            {ARTICLE_FEATURES.showBookmark && (
              <TouchableOpacity style={styles.actionItem} onPress={handleToggleBookmark}>
                <Bookmark
                  size={18}
                  color={bookmarked ? theme.colors.primary : theme.colors.textMuted}
                  fill={bookmarked ? theme.colors.primary : 'none'}
                />
              </TouchableOpacity>
            )}

            {ARTICLE_FEATURES.showShare && (
              <TouchableOpacity style={styles.actionItem} onPress={handleShare}>
                <Share2 size={18} color={theme.colors.textMuted} />
              </TouchableOpacity>
            )}
          </View>
        )}

        {ARTICLE_FEATURES.showComment && (
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeaderRow}>
              <MessageCircle size={18} color={theme.colors.primary} />
              <Text style={styles.sectionHeaderText}>Comments ({comments.length})</Text>
            </View>

            {comments.length === 0 ? (
              <Text style={styles.emptyText}>No comments yet. Be the first to share your thoughts!</Text>
            ) : (
              comments.map((c) => (
                <View key={c.id} style={styles.commentRow}>
                  <View style={styles.commentAvatar}>
                    <Text style={styles.commentAvatarText}>{c.author?.[0] ?? '?'}</Text>
                  </View>
                  <View style={styles.commentBody}>
                    <Text style={styles.commentAuthor}>{c.author}</Text>
                    <Text style={styles.commentText}>{c.text}</Text>
                    <Text style={styles.commentDate}>{c.date}</Text>
                  </View>
                </View>
              ))
            )}

            <View style={styles.commentInputRow}>
              <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                placeholderTextColor={theme.colors.textMuted}
                value={commentText}
                onChangeText={setCommentText}
                onSubmitEditing={handleAddComment}
                returnKeyType="send"
              />
              <TouchableOpacity style={styles.sendBtn} onPress={handleAddComment}>
                <Send size={16} color={theme.colors.primaryText} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {ARTICLE_FEATURES.showRelatedArticles && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Related Articles</Text>
            {relatedArticles.length === 0 ? (
              <Text style={styles.emptyText}>No articles yet.</Text>
            ) : (
              relatedArticles.map((item) => (
                <RelatedArticleCard key={item.id} article={item} onPress={handleRelatedPress} />
              ))
            )}
          </View>
        )}

        {ARTICLE_FEATURES.showTrending && (
          <View style={[styles.sectionCard, styles.lastSectionCard]}>
            <Text style={styles.sectionTitle}>Trending</Text>
            {trending.map((item, idx) => (
              <TrendingListItem
                key={item.id}
                item={item}
                index={idx}
                isLast={idx === trending.length - 1}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetailScreen;
