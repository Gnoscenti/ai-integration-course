import { Course } from "./types/course";

// Helper function to extract title from filename (simple version)
const getTitleFromFilename = (filename: string): string => {
  // Remove prefix like "lessonXX_" and suffix "_draft.md"
  // e.g., "lesson26_ai_real_estate_intro_draft.md" -> "ai_real_estate_intro"
  const nameWithoutPrefix = filename.replace(/^lesson\d+_/, "");
  const nameWithoutSuffix = nameWithoutPrefix.replace(/_draft\\.md$/, "");  // Convert underscores to spaces and capitalize
  return nameWithoutSuffix
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Based on the provided files and knowledge base, let's structure some modules.
// We will assume a main course "AI Integration Masterclass"

export const mockCourseData: Course[] = [
  {
    id: "ai-masterclass-1",
    title: "AI Integration Masterclass",
    description: "Unlock the power of AI to accelerate your skills and transform your work.",
    modules: [
      {
        id: "module-intro",
        title: "Introduction to AI & The Future",
        description: "Understand the AI landscape and its transformative potential.",
        order: 1,
        lessons: [
          {
            id: "lesson13",
            title: getTitleFromFilename("lesson13_ai_future_trends_draft.md"),
            storagePath: "course_content/lessons/lesson13_ai_future_trends_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of intro module is free
            order: 1,
            videoUrl: "https://www.youtube.com/watch?v=example_future_trends"
          },
        ],
      },
      {
        id: "module-entrepreneurship",
        title: "AI for New Entrepreneurs",
        description: "Launch and scale your AI-powered startup.",
        order: 2,
        lessons: [
          {
            id: "lesson14",
            title: getTitleFromFilename("lesson14_ai_entrepreneurial_landscape_draft.md"),
            storagePath: "course_content/lessons/lesson14_ai_entrepreneurial_landscape_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of module is free
            order: 1,
          },
          {
            id: "lesson15",
            title: getTitleFromFilename("lesson15_identifying_validating_ai_ideas_draft.md"),
            storagePath: "course_content/lessons/lesson15_identifying_validating_ai_ideas_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 2,
          },
          {
            id: "lesson16",
            title: getTitleFromFilename("lesson16_ai_mvp_development_draft.md"),
            storagePath: "course_content/lessons/lesson16_ai_mvp_development_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 3,
          },
          {
            id: "lesson17",
            title: getTitleFromFilename("lesson17_data_strategy_management_draft.md"),
            storagePath: "course_content/lessons/lesson17_data_strategy_management_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 4,
          },
          {
            id: "lesson18",
            title: getTitleFromFilename("lesson18_ethical_ai_development_draft.md"),
            storagePath: "course_content/lessons/lesson18_ethical_ai_development_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 5,
          },
          {
            id: "lesson19",
            title: getTitleFromFilename("lesson19_funding_scaling_ai_startup_draft.md"),
            storagePath: "course_content/lessons/lesson19_funding_scaling_ai_startup_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 6,
          },
        ],
      },
      {
        id: "module-smb",
        title: "AI for Small Business Owners",
        description: "Leverage AI to grow and optimize your small business.",
        order: 3,
        lessons: [
          {
            id: "lesson20",
            title: getTitleFromFilename("lesson20_ai_for_small_business_growth_draft.md"),
            storagePath: "course_content/lessons/lesson20_ai_for_small_business_growth_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of module is free
            order: 1,
          },
          {
            id: "lesson21",
            title: getTitleFromFilename("lesson21_ai_smb_custsvc_marketing_draft.md"),
            storagePath: "course_content/lessons/lesson21_ai_smb_custsvc_marketing_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 2,
          },
          {
            id: "lesson22",
            title: getTitleFromFilename("lesson22_ai_smb_operations_data_draft.md"),
            storagePath: "course_content/lessons/lesson22_ai_smb_operations_data_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 3,
          },
          {
            id: "lesson23",
            title: getTitleFromFilename("lesson23_choosing_ai_tools_smb_draft.md"),
            storagePath: "course_content/lessons/lesson23_choosing_ai_tools_smb_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 4,
          },
          {
            id: "lesson24",
            title: getTitleFromFilename("lesson24_implementing_ai_smb_draft.md"),
            storagePath: "course_content/lessons/lesson24_implementing_ai_smb_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 5,
          },
          {
            id: "lesson25",
            title: getTitleFromFilename("lesson25_ai_smb_case_studies_draft.md"),
            storagePath: "course_content/lessons/lesson25_ai_smb_case_studies_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 6,
          },
        ],
      },
      {
        id: "module-real-estate",
        title: "AI for Real Estate Professionals",
        description: "Transform your real estate business with AI.",
        order: 4,
        lessons: [
          {
            id: "lesson26",
            title: getTitleFromFilename("lesson26_ai_real_estate_intro_draft.md"),
            storagePath: "course_content/lessons/lesson26_ai_real_estate_intro_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of module is free
            order: 1,
          },
          {
            id: "lesson27",
            title: getTitleFromFilename("lesson27_ai_real_estate_leads_clients_draft.md"),
            storagePath: "course_content/lessons/lesson27_ai_real_estate_leads_clients_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 2,
          },
          {
            id: "lesson28",
            title: getTitleFromFilename("lesson28_ai_real_estate_valuation_analysis_draft.md"),
            storagePath: "course_content/lessons/lesson28_ai_real_estate_valuation_analysis_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 3,
          },
          {
            id: "lesson29",
            title: getTitleFromFilename("lesson29_ai_real_estate_marketing_showings_draft.md"),
            storagePath: "course_content/lessons/lesson29_ai_real_estate_marketing_showings_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 4,
          },
          {
            id: "lesson30",
            title: getTitleFromFilename("lesson30_ai_property_management_draft.md"),
            storagePath: "course_content/lessons/lesson30_ai_property_management_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 5,
          },
          {
            id: "lesson31",
            title: getTitleFromFilename("lesson31_ai_real_estate_case_studies_draft.md"),
            storagePath: "course_content/lessons/lesson31_ai_real_estate_case_studies_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 6,
          },
        ],
      },
      {
        id: "module-c-suite",
        title: "AI for C-Suite Executives",
        description: "Lead your organization through the AI revolution.",
        order: 5,
        lessons: [
          {
            id: "lesson32",
            title: getTitleFromFilename("lesson32_ai_csuite_intro_draft.md"),
            storagePath: "course_content/lessons/lesson32_ai_csuite_intro_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of module is free
            order: 1,
          },
          {
            id: "lesson33",
            title: getTitleFromFilename("lesson33_ai_strategic_planning_decision_draft.md"),
            storagePath: "course_content/lessons/lesson33_ai_strategic_planning_decision_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 2,
          },
          {
            id: "lesson34",
            title: getTitleFromFilename("lesson34_ai_operational_excellence_supply_chain_draft.md"),
            storagePath: "course_content/lessons/lesson34_ai_operational_excellence_supply_chain_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 3,
          },
          {
            id: "lesson35",
            title: getTitleFromFilename("lesson35_ai_marketing_cx_leadership_draft.md"),
            storagePath: "course_content/lessons/lesson35_ai_marketing_cx_leadership_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 4,
          },
          // lesson36 is missing from provided files, assuming it exists or will be added
          {
            id: "lesson37",
            title: getTitleFromFilename("lesson37_ai_hr_talent_management_draft.md"),
            storagePath: "course_content/lessons/lesson37_ai_hr_talent_management_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 6, // Assuming lesson36 was order 5
          },
        ],
      },
      {
        id: "module-creators",
        title: "AI for Creators & Artists",
        description: "Unleash your creativity with AI tools and techniques.",
        order: 6,
        lessons: [
          {
            id: "lesson38",
            title: getTitleFromFilename("lesson38_ai_creative_revolution_intro_draft.md"),
            storagePath: "course_content/lessons/lesson38_ai_creative_revolution_intro_draft.md", // Changed contentPath to storagePath
            isFree: true, // First lesson of module is free
            order: 1,
          },
          {
            id: "lesson39",
            title: getTitleFromFilename("lesson39_ai_visual_arts_draft.md"),
            storagePath: "course_content/lessons/lesson39_ai_visual_arts_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 2,
          },
          {
            id: "lesson40",
            title: getTitleFromFilename("lesson40_ai_music_composition_production_draft.md"),
            storagePath: "course_content/lessons/lesson40_ai_music_composition_production_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 3,
          },
          {
            id: "lesson41",
            title: getTitleFromFilename("lesson41_ai_writing_storytelling_draft.md"),
            storagePath: "course_content/lessons/lesson41_ai_writing_storytelling_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 4,
          },
          {
            id: "lesson42",
            title: getTitleFromFilename("lesson42_ai_film_video_production_draft.md"),
            storagePath: "course_content/lessons/lesson42_ai_film_video_production_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 5,
          },
          {
            id: "lesson43",
            title: getTitleFromFilename("lesson43_ai_game_development_draft.md"),
            storagePath: "course_content/lessons/lesson43_ai_game_development_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 6,
          },
          {
            id: "lesson44",
            title: getTitleFromFilename("lesson44_ai_live_performances_draft.md"),
            storagePath: "course_content/lessons/lesson44_ai_live_performances_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 7,
          },
          {
            id: "lesson45",
            title: getTitleFromFilename("lesson45_ai_personalization_recommendation_draft.md"),
            storagePath: "course_content/lessons/lesson45_ai_personalization_recommendation_draft.md", // Changed contentPath to storagePath
            isFree: false,
            order: 8,
          },
        ],
      },
    ],
  },
];

