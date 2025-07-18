export const landingPageStyles = {
  // Main container
  
  container: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50",

  // Header styles
 
   header: "fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100/50",
  headerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
  logoContainer: "flex items-center gap-3",
  logoIcon: "w-10 h-10 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200",
  logoIconInner: "w-5 h-5 text-white",
  logoText: "text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent",
  mobileMenuButton: "md:hidden p-2 rounded-xl hover:bg-blue-50 transition-colors",
  mobileMenuIcon: "text-teal-600",

  
  desktopAuthButton: "relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-200",
  desktopAuthButtonText: "relative",
  desktopAuthButtonOverlay: "absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-2xl",

  

   // Mobile menu
  mobileMenu: "md:hidden bg-white/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-blue-100/50 transition-all duration-300 ease-in-out",
  mobileMenuContainer: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome: "text-teal-700 font-medium text-center py-2 text-base sm:text-lg",
  mobileDashboardButton: "w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all",
  mobileAuthButton: "w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all",

  // Main content
  main: "pt-24",

  


  // Hero section
  heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20",
  heroGrid: "flex flex-wrap justify-between gap-10 lg:gap-12 items-center",
  heroLeft: "space-y-8",
  tagline: "inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-gradient-to-r from-blue-100 to-pink-100 border border-blue-200 text-teal-700 rounded-full font-bold text-xs sm:text-sm",
  heading: "text-4xl sm:text-6xl lg:text-8xl font-black leading-tight",
  headingText: "block text-slate-900",
  headingGradient: "block bg-gradient-to-r from-teal-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent",
  description: "text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-medium",
  ctaButtons: "flex flex-col sm:flex-row gap-4",


 
  // Buttons
  primaryButton: "group relative px-10 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-200",
  primaryButtonOverlay: "absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity",
  primaryButtonContent: "relative flex items-center gap-2 sm:gap-3",
  primaryButtonIcon: "group-hover:translate-x-1 transition-transform",
  secondaryButton: "px-8 sm:px-10 py-3 sm:py-4 border-2 border-blue-200 text-teal-700 font-bold rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all",

 
  // Stats
  statsContainer: "flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6",
  statItem: "text-center",
  statNumber: "text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent",
  statLabel: "text-xs sm:text-sm text-slate-500 font-medium",


  
  // Hero illustration
  heroIllustration: "relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto",
  heroIllustrationBg: "absolute -inset-8 bg-gradient-to-r from-blue-200/50 to-pink-200/50 rounded-3xl blur-3xl",
  heroIllustrationContainer: "relative",

  
   // SVG styles
  svgContainer: "w-full h-auto max-w-md mx-auto",
  svgRect: "fill-[url(#cardGradient)] stroke-[#c7d2fe] stroke-[2]",
  svgCircle: "fill-[url(#bgGradient)]",
  svgRectPrimary: "fill-[#06b6d4]",
  svgRectSecondary: "fill-[#818cf8]",
  svgRectLight: "fill-[#e0e7ff]",
  svgRectSkill: "fill-[#a5b4fc]",
  svgAnimatedCircle: "fill-[#f472b6] opacity-80",
  svgAnimatedRect: "fill-[#38bdf8] opacity-80",
  svgAnimatedPolygon: "fill-[#f59e42] opacity-80",


 
   // Features section
  featuresSection: "bg-gradient-to-br from-blue-50 to-pink-50 py-16 sm:py-24",
  featuresContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  featuresHeader: "text-center mb-12 sm:mb-20",
  featuresTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6",
  featuresTitleGradient: "bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent",
  featuresDescription: "text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8",

 
  // Feature cards
  featureCard: "group relative",
  featureCardHover: "absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-3xl from-blue-200 to-pink-200",
  featureCardContent: "relative bg-gradient-to-br border border-white/50 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all group-hover:scale-105",
  featureIconContainer: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg",
  featureIcon: "w-8 h-8 sm:w-10 sm:h-10",
  featureTitle: "text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-4",
  featureDescription: "text-sm sm:text-base text-slate-600 leading-relaxed font-medium",


  


   // Feature gradients
  featureCardViolet: "from-blue-50 to-indigo-50",
  featureCardFuchsia: "from-pink-50 to-blue-50",
  featureCardOrange: "from-yellow-50 to-pink-50",
  featureIconViolet: "from-teal-500 to-indigo-500",
  featureIconFuchsia: "from-pink-500 to-blue-500",
  featureIconOrange: "from-yellow-400 to-pink-500",

  
  
  // CTA section
  ctaSection: "py-16 sm:py-24",
  ctaContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  ctaCard: "relative",
  ctaCardBg: "absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-blue-200/50 to-pink-200/50 rounded-3xl blur-3xl",
  ctaCardContent: "relative bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-3xl p-8 sm:p-16",
  ctaTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6",
  ctaTitleGradient: "bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent",
  ctaDescription: "text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium",
  ctaButton: "group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-200",
  ctaButtonOverlay: "absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity",
  ctaButtonText: "relative",



  footer: "border-t border-blue-100 bg-gradient-to-r from-blue-50 to-pink-50 py-6 sm:py-8",
  footerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  footerText: "text-sm sm:text-base text-slate-500 font-medium",
  footerHeart: "bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent",
  footerLink: "hover:text-indigo-400 underline"
};



export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-indigo-900",
  headerSubtitle: "text-teal-600",

  // Create Button
  createButton: "group relative px-10 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-200",
  createButtonOverlay: "absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-teal-100 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-indigo-900 mb-2",
  emptyText: "text-teal-700 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard: "flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-pink-50 border-2 border-dashed border-teal-300 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-2xl hover:border-teal-500 h-full",
  newResumeIcon: "w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-100",
  newResumeTitle: "text-xl font-bold text-indigo-900 mb-2 text-center",
  newResumeText: "text-teal-700 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-indigo-900",
  modalCloseButton: "text-indigo-400 hover:text-pink-500",

  // Delete Confirmation
  deleteIconWrapper: "bg-pink-100 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-pink-700 mb-2",
  deleteText: "text-indigo-400 mb-4",
}


export const cardStyles = {
  // ProfileInfoCard styles
  profileCard: "flex items-center gap-3 p-2 sm:p-3 bg-white backdrop-blur-xl border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",
  profileInitialsContainer: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md",
  profileInitialsText: "text-base sm:text-lg font-black text-white",
  profileName: "text-xs sm:text-sm font-bold text-indigo-900",
  logoutButton: "text-teal-600 text-[10px] sm:text-xs font-bold cursor-pointer hover:text-pink-500 transition-colors",

  // ResumeSummaryCard styles
  resumeCard: "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-white border border-blue-100 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-teal-300",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden",
  emptyPreview: "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl",
  emptyPreviewIcon: "w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-4 shadow-md",
  emptyPreviewText: "text-indigo-900 text-sm font-bold",
  emptyPreviewSubtext: "text-teal-700 text-xs mt-1",
  infoArea: "bg-blue-50 border-t border-blue-100 p-4 sm:p-6",
  title: "text-sm sm:text-base font-bold text-indigo-900 truncate mb-2 group-hover:text-teal-600 transition-colors",
  dateInfo: "flex items-center gap-2 text-xs text-teal-500",

  // Action buttons
  actionOverlay: "absolute inset-4 sm:inset-6 bg-gradient-to-t from-white/80 via-white/20 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl",
  actionButtonsContainer: "flex gap-3",
  editButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-teal-500 to-indigo-500 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  deleteButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-400 rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  buttonIcon: "text-white group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-2 bg-blue-100 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden bg-gradient-to-r from-teal-400 to-pink-400",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs font-medium text-teal-700",
  percentageText: "text-xs font-bold text-indigo-900",

  // Completion indicator
  completionIndicator: "absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm",
  completionDot: "w-3 h-3 rounded-full flex items-center justify-center bg-pink-400",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-xs font-bold text-indigo-900",

  // Completion color classes
  completionHigh: "from-emerald-400 to-teal-500",
  completionMedium: "from-yellow-400 to-pink-400",
  completionLow: "from-pink-500 to-red-500",

  // TemplateCard styles
  templateCard: "relative rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-blue-100",
  templateCardSelected: "ring-2 ring-indigo-500 scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-teal-300",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle: "w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-indigo-900",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-teal-700 mt-1"
};

export const authStyles = {
  container: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-100 shadow-2xl",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-indigo-900 mb-2",
  subtitle: "text-teal-700 font-medium",
  form: "space-y-6",
  errorMessage: "text-pink-500 text-sm font-medium bg-pink-50 border border-pink-200 px-4 py-3 rounded-xl",
  submitButton: "w-full py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-blue-200 transition-all text-lg",
  switchText: "text-center text-sm text-teal-700 font-medium",
  switchButton: "font-black text-teal-600 hover:text-pink-500 transition-colors",
  signupContainer: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-pink-50 rounded-3xl border border-pink-100 shadow-2xl overflow-hidden",
  signupTitle: "text-2xl font-black text-indigo-900 mb-2",
  signupSubtitle: "text-teal-700 font-medium",
  signupForm: "space-y-4",
  signupSubmit: "w-full py-4 bg-gradient-to-r from-pink-500 to-indigo-400 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-pink-200 transition-all text-lg",
  signupSwitchButton: "font-black text-pink-600 hover:text-indigo-500 transition-colors"
};



  export const shimmerStyle = `
 @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .animate-flow {
    animation: flow 4s infinite linear;
  }
  
  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`



// Common Styles
export const commonStyles = {
  trashButton: "absolute top-4 right-4 p-2 text-pink-500 hover:bg-pink-50 rounded-xl transition-all",
  addButtonBase: "flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 hover:scale-105 transition-all shadow-lg",
};

// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-blue-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  sectionHeading: "text-lg font-bold text-indigo-800 mb-6 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full",
  dotOrange: "w-2 h-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full",
  languageItem: "relative bg-white border border-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-teal-500 to-indigo-500",
  addButtonInterest: "bg-gradient-to-r from-pink-500 to-yellow-400",
};

// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  item: "relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-500",
};

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-blue-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
};

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gradient-to-br from-white to-indigo-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  item: "relative bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-indigo-500 to-teal-500",
};

// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-pink-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  textarea: "w-full p-4 bg-white border border-pink-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-50 transition-all outline-none resize-none",
};

// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gradient-to-br from-white to-cyan-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  item: "relative bg-white border border-cyan-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-cyan-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-cyan-500 to-blue-500",
};

// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-amber-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  item: "relative bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  addButton: "bg-gradient-to-r from-amber-500 to-pink-500",
};

// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gradient-to-br from-white to-green-50",
  heading: "text-2xl font-black text-indigo-900 mb-8",
  item: "relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all",
  textarea: "w-full p-4 bg-white border border-green-200 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-50 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-green-500 to-emerald-500",
};

export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-blue-50 border border-blue-100 rounded-2xl py-4 px-6 mb-6 shadow-sm",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm",
  previewContainer: "bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto"
};

export const buttonStyles = {
  theme: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 text-teal-700 font-bold rounded-xl hover:bg-blue-200 transition-all",
  delete: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-pink-100 text-pink-700 font-bold rounded-xl hover:bg-pink-200 transition-all",
  download: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all",
  back: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm",
  save: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-indigo-100 text-indigo-700 font-bold rounded-xl hover:bg-indigo-200 transition-all text-sm",
  next: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm",
  modalAction: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm"
};

export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-indigo-700",
  modalBadge: "inline-flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full text-sm font-medium text-teal-700",
  error: "flex items-center gap-3 text-sm font-medium text-pink-700 bg-pink-50 border border-pink-200 px-4 py-3 rounded-xl mb-4"
};

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
};

export const inputStyles = {
  wrapper: "mb-6 group",
  label: "block text-sm font-bold text-indigo-900 mb-3 group-focus-within:text-teal-600 transition-colors",
  inputContainer: focused => `relative flex items-center bg-blue-50 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${focused
    ? 'border-teal-500 ring-4 ring-teal-500/20 shadow-lg shadow-teal-500/10'
    : 'border-blue-200 hover:border-teal-300'}`,
  inputField: "w-full bg-transparent outline-none text-indigo-900 placeholder-teal-400 font-medium",
  toggleButton: "text-teal-500 hover:text-pink-500 transition-colors p-1 rounded-lg hover:bg-blue-50",
};

export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: hovered => `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-blue-50 border-2 border-dashed border-blue-200 rounded-full cursor-pointer transition-all duration-300 ${hovered ? 'hover:border-teal-500 hover:bg-teal-50' : ''}`,
  cameraButton: "absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white rounded-full transition-all shadow-lg hover:scale-110",
  previewWrapper: "relative group",
  previewImageContainer: hovered => `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg transition-all duration-300 ${hovered ? 'group-hover:border-teal-400' : ''}`,
  previewImage: "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay: "absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) => `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all`,
};

export const titleInputStyles = {
  container: "flex items-center gap-3",
  titleText: "text-lg sm:text-xl font-bold text-indigo-900",
  editButton: "p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all group",
  editIcon: "w-5 h-5 text-indigo-400 group-hover:text-teal-600 transition-colors",
  inputField: focused => `text-lg sm:text-xl font-bold bg-transparent outline-none text-indigo-900 border-b-2 pb-2 transition-all duration-300 ${focused ? 'border-teal-500' : 'border-blue-200'}`,
  confirmButton: "p-2 rounded-xl bg-teal-500 hover:bg-indigo-500 text-white transition-all",
};

export const modalStyles = {
  overlay: "fixed inset-0 flex items-center justify-center w-full h-full bg-black/60 backdrop-blur-sm z-50",
  container: "relative flex flex-col bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-blue-100 max-w-[95vw] max-h-[95vh]",
  header: "flex items-center justify-between p-6 border-b border-blue-100 bg-gradient-to-r from-white to-blue-50",
  title: "text-xl font-black text-indigo-900",
  actionButton: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg mr-12",
  closeButton: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-pink-50 text-indigo-400 hover:text-pink-500 rounded-xl transition-all shadow-lg hover:scale-110 z-10",
  body: "flex-1 overflow-y-auto"
};

export const infoStyles = {
  // Progress
  progressWrapper: "w-20 h-2 rounded-full bg-blue-100",
  progressBar: color => `h-full rounded-full transition-all`,

  // ActionLink
  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-indigo-700 hover:text-teal-600 transition-colors",

  // CertificationInfo
  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-indigo-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-teal-700 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-indigo-900",

  // EducationInfo
  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-indigo-900",
  eduInstitution: "text-sm text-teal-700 font-medium",
  eduDuration: "text-xs text-indigo-400 font-medium italic mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-indigo-900",

  // Links
  linkRow: "flex items-center space-x-1 hover:text-teal-600",

  // ProjectInfo
  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? 'text-sm' : 'text-base'} font-semibold text-indigo-900`,
  projectDesc: "text-sm text-teal-700 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  // WorkExperience
  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-indigo-900",
  workRole: "text-base font-medium text-teal-700",
  workDuration: color => `text-sm font-bold italic`,
  workDesc: "text-sm text-teal-700 font-medium leading-relaxed"
};