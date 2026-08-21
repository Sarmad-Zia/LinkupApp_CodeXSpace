// Toggle any of these off to remove that button/section from the
// Article Detail screen entirely (not just disable it).
export const ARTICLE_FEATURES = {
  showLike: true,
  showComment: true,
  showBookmark: true,
  showShare: true,
  showEditDelete: true, // also requires article.isOwner to be true
  showRelatedArticles: true,
  showTrending: true,
};

// Used only if the screen is opened without a route param (e.g. previewing
// the screen directly). Mirrors the "New Test Art" example.
export const MOCK_ARTICLE = {
  id: 'mock-1',
  title: 'New Test Art',
  image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
  author: 'Abdullah Azalea',
  authorAvatar: null,
  authorRole: 'Free LinkUp Member',
  date: 'Jun 27, 2026',
  readTime: '0 min read',
  category: 'Technology',
  subCategory: 'Test',
  body: 'Testing',
  likes: 1,
  isOwner: true,
};
