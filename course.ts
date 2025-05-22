export interface Lesson {
  id: string; // Document ID in Firestore
  title: string;
  order: number;
  isFree: boolean;
  storagePath: string; // Path to Markdown file in Firebase Storage
  videoUrl?: string;
  durationMinutes?: number;
  // Potentially other metadata like short description or learning objectives
}

export interface Module {
  id: string; // Document ID in Firestore
  title: string;
  description: string;
  order: number;
  lessons: Lesson[]; // In Firestore, this would be a subcollection. For frontend type, it can be an array after fetching.
}

export interface Course {
  id: string; // Document ID in Firestore
  title: string;
  description: string;
  // instructor?: string;
  // coverImageUrl?: string;
  modules: Module[]; // In Firestore, this would be a subcollection. For frontend type, it can be an array after fetching.
}

// User Progress Types
export interface UserCourseProgress {
  courseId: string; // Corresponds to Course.id
  completedLessons: string[]; // Array of Lesson.id
  lastAccessedLessonId?: string;
  overallProgressPercent?: number;
  // lastAccessedTimestamp?: firebase.firestore.Timestamp; // If using Firestore timestamps
}

// For user document in Firestore (under users/{uid})
export interface UserProfile {
  displayName?: string;
  email?: string;
  photoURL?: string;
  // custom fields like subscription status can be added here or in a subcollection
  // For example, using custom claims is also an option for subscription status
  isSubscribed?: boolean; // Simplified for now, will be more detailed with Stripe
  activeTrial?: boolean;
  trialEndDate?: Date; // Or Firestore Timestamp
}

