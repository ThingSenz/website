export type AppProject = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  category: string;
  status: "Published" | "In review" | "Open source" | "Prototype";
  year: string;
  accent: string;
  technologies: string[];
  highlights: string[];
  links: {
    playStore?: string;
    source?: string;
  };
  license?: string;
  privacy: {
    lastUpdated: string;
    contactEmail: string;
    overview: string;
    dataCollected: string[];
    dataUse: string[];
    thirdParties: string[];
    externalLibraries?: {
      name: string;
      description: string;
      url: string;
    }[];
    retention: string;
    children: string;
  };
};

export const appProjects: AppProject[] = [
  {
    slug: "calculator",
    name: "Calculator",
    tagline: "Simple calculations with a clean Kotlin Android app.",
    summary:
      "A simple and easy-to-use Android calculator built with Kotlin and the EvalEx parser library.",
    description:
      "Calculator is an Android app written in Kotlin for everyday arithmetic. It supports addition, subtraction, multiplication, division, and modulus operations, with expression evaluation handled through EvalEx.",
    category: "Utility",
    status: "Published",
    year: "2022",
    accent: "#00a88f",
    technologies: ["Kotlin", "Android", "EvalEx", "Apache 2.0"],
    highlights: [
      "Supports addition, subtraction, multiplication, division, and modulus",
      "Built in Kotlin for Android",
      "Uses EvalEx for mathematical expression evaluation",
      "No ads, analytics, internet connection, or explicit app permissions",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.thingsenz.calculator",
      source: "https://github.com/samarthsubramanya/Calculator",
    },
    license: "Apache License 2.0",
    privacy: {
      lastUpdated: "July 18, 2026",
      contactEmail: "thingsenz@gmail.com",
      overview:
        "Calculator is a fully offline utility. It performs all calculations locally on your device and does not collect, store, or transmit any personal data. This policy describes, in full, our approach to your privacy: there is no data collection to disclose.",
      dataCollected: [
        "Calculator does not collect any personal data, such as your name, email address, location, contacts, or device identifiers.",
        "The app does not request access to the camera, microphone, storage, or any other device permission.",
        "No usage analytics, crash reports, or diagnostic data are collected.",
        "Calculator does not require or use an internet connection, so no data ever leaves your device.",
      ],
      dataUse: [
        "Because no data is collected, none is used, shared, or sold for any purpose, including advertising, analytics, or profiling.",
        "Calculations you enter are held only in the app's memory while it is open and are discarded when the app is closed.",
      ],
      thirdParties: [
        "Calculator does not integrate with any third-party advertising, analytics, or tracking services.",
        "No information is shared with third parties, as none is collected in the first place.",
      ],
      externalLibraries: [
        {
          name: "EvalEx",
          description:
            "An open-source expression-evaluation library used entirely on-device to perform calculations. It does not transmit any data externally.",
          url: "https://github.com/uklimaschewski/EvalEx",
        },
      ],
      retention:
        "Calculator has no personal data to retain, store, or delete. Values you enter exist only in memory for the duration of your session and are cleared automatically when the app is closed.",
      children:
        "Calculator does not knowingly collect personal information from anyone, including children under the age of 13, because it does not collect personal information from any user, regardless of age.",
    },
  },
];

export function getAppProject(slug: string) {
  return appProjects.find((project) => project.slug === slug);
}
