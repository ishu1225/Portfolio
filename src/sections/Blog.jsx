import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiArrowRight, FiFeather, FiPlus, FiTrash2 } from 'react-icons/fi';
import { X } from 'lucide-react';

const defaultBlogPosts = [
  {
    id: 1,
    title: 'How I built a Face Auth system',
    excerpt: 'A deep dive into building a secure, scalable facial recognition service using Python and modern machine learning techniques.',
    content: [
      "Traditional password-based authentication systems are becoming increasingly vulnerable to brute-force attacks and credential stuffing. To combat this, I wanted to build a seamless authentication pipeline that leveraged the user's secure biometric data—specifically, their face.",
      "The system was engineered using Python and OpenCV for facial tracking and bounding box extraction. Once a face is detected, a state-of-the-art deep learning model processes the image to extract high-dimensional facial embeddings. These embeddings are then securely hashed and compared against a pre-authorized database.",
      "One of the biggest challenges I faced was liveness detection—preventing bad actors from spoofing the system by holding up a digital photo or video to the camera. I integrated a secondary neural network to analyze micro-expressions and texture disparities, effectively mitigating 2D spoof attacks and securing the vault!"
    ],
    date: 'March 2026',
    readTime: '5 min read',
    tags: ['Python', 'Machine Learning', 'Security']
  },
  {
    id: 2,
    title: 'Mistakes I made in DSA',
    excerpt: 'Reflecting on my problem-solving journey, common data structure pitfalls, and how I improved my algorithmic thinking.',
    content: [
      "When I first started grinding Data Structures and Algorithms, I fell into the classic trap: memorizing solutions instead of recognizing underlying patterns. I would stare at a dynamic programming problem, memorize the 2D array state transitions, and assume I had learned something.",
      "My breakthrough came when I shifted my focus to abstract problem mapping. Instead of seeing 'Longest Palindromic Substring', I trained myself to see the 'Expand Around Center' pattern. I began categorizing problems by their fundamental mechanism—Two Pointers, Sliding Window, Topological Sort—rather than their surface-level story.",
      "The biggest mistake you can make is rushing to write code. Now, I spend 70% of my time drawing the problem out on a whiteboard, tracing edge cases, and explicitly defining my space/time complexity constraints before I ever touch the keyboard."
    ],
    date: 'March 2026',
    readTime: '4 min read',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving']
  }
];

export default function Blog() {
  // Use local storage to persist user-added blogs
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('portfolio_blogs_v2');
    return saved ? JSON.parse(saved) : defaultBlogPosts;
  });

  const [selectedPost, setSelectedPost] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', excerpt: '', content: '', tags: '' });

  // Save to local storage whenever posts change
  useEffect(() => {
    localStorage.setItem('portfolio_blogs_v2', JSON.stringify(posts));
  }, [posts]);

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (selectedPost || isAdding) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost, isAdding]);

  const handleDelete = (e, id) => {
    e.stopPropagation(); // prevent opening the post
    if (confirm('Are you sure you want to delete this blog post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content) return;
    
    // Auto-calculate rough read time (approx 200 words per minute)
    const wordCount = newBlog.content.split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const postToAdd = {
      id: newId,
      title: newBlog.title,
      excerpt: newBlog.excerpt || newBlog.content.substring(0, 100) + '...',
      content: newBlog.content.split('\n').filter(p => p.trim() !== ''),
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      readTime: `${readTimeMins} min read`,
      tags: newBlog.tags.split(',').map(t => t.trim()).filter(t => t !== '')
    };

    setPosts([postToAdd, ...posts]);
    setIsAdding(false);
    setNewBlog({ title: '', excerpt: '', content: '', tags: '' });
  };

  return (
    <SectionWrapper id="blog">
      <div className="flex flex-col items-center justify-center mb-6 relative">
        <SectionTitle 
           title="Blog" 
           subtitle="Thoughts & Writings"
        />
        
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-6 py-3 -mt-4 bg-[#111111] border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black font-extrabold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1 z-10"
        >
          <FiPlus size={20} />
          Create Blog
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[var(--color-dark)] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_30px_rgba(255,215,0,0.05)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Delete Button (Visible on Hover) */}
            <button 
              onClick={(e) => handleDelete(e, post.id)}
              className="absolute top-4 right-4 p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10"
              title="Delete Blog"
            >
              <FiTrash2 size={18} />
            </button>

            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[var(--color-dark-bg)] rounded-xl border border-white/5 text-[var(--color-accent)]">
                <FiFeather size={20} />
              </div>
              <div className="flex gap-3 text-xs font-medium tracking-wide text-[var(--color-text-muted)] mr-8">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-light)] transition-colors pr-6">
              {post.title}
            </h3>
            
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="mt-auto flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-white/5 text-[var(--color-text-muted)] rounded-full border border-white/10 group-hover:border-[var(--color-accent)]/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm group-hover:gap-3 transition-all">
                Read More <FiArrowRight />
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal Overlay for Full Post */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto custom-scrollbar"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[var(--color-dark)] border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-10 my-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[var(--color-text-muted)] hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-accent)] mb-4">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] text-white mb-8 pr-8">
                {selectedPost.title}
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-[var(--color-dark-bg)] text-[var(--color-text-muted)] border border-white/5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Overlay for Adding New Blog */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto custom-scrollbar"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[var(--color-dark)] border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 my-auto"
            >
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  Add New Blog Post
                </h2>
                <button
                  onClick={() => setIsAdding(false)}
                  className="p-2 text-[var(--color-text-muted)] hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleAddSubmit} className="flex flex-col gap-5 text-[var(--color-text-primary)]">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Blog Title</label>
                  <input 
                    required 
                    type="text" 
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                    placeholder="e.g. Masterclass on React Hooks"
                    className="w-full bg-[var(--color-dark-bg)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Short Excerpt (shows on card)</label>
                  <textarea 
                    value={newBlog.excerpt}
                    onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                    placeholder="A brief 1-2 sentence summary of what this post is about."
                    rows={2}
                    className="w-full bg-[var(--color-dark-bg)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Content (paragraphs separated by new lines)</label>
                  <textarea 
                    required
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                    placeholder="Write your full blog post here... Press Enter twice to create a new paragraph."
                    rows={8}
                    className="w-full bg-[var(--color-dark-bg)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors custom-scrollbar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    value={newBlog.tags}
                    onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
                    placeholder="e.g. React, Web Dev, JavaScript"
                    className="w-full bg-[var(--color-dark-bg)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div className="mt-4 flex justify-end gap-4">
                  <button 
                    type="button" 
                    onClick={() => setIsAdding(false)}
                    className="px-6 py-2.5 rounded-xl font-medium text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2.5 rounded-xl font-extrabold bg-[#111111] border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
