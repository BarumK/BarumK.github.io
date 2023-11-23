// gitprofile.config.js

const config = {
  github: {
    username: 'BarumK', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Lecture_SKKU'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '정욱-김-17a3b5298',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'jwook_kimmm',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'BarumK/github.io',
    phone: '+82-10-3815-8107',
    email: 'jwjw0142@g.skku.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'Python',
    'JAVA',
    'MySQL',
    'Git',
    'Docker',
    'HTML&CSS',
  ],
  experiences: [
    {
      company: '성균관대학교',
      position: '성균관대학교 인공지능융합전공 학회 [COCO:] 활동',
      from: 'March 2021',
      to: 'Present',
      companyLink: 'https://www.skku.edu/skku/index.do',
    },
    {
      company: '성균관대학교',
      position: '삼성학술정보관 책 추천 프로젝트 근로장학생',
      from: 'November 2021',
      to: 'October 2021',
      companyLink: 'https://www.skku.edu/skku/index.do',
    },
    {
      company: '성균관대학교 인공지능융합전공 학회 [COCO:]',
      position: '인공지능을 활용한 애플리케이션/웹 개발 대회 우승',
      from: 'June 2021',
      to: 'August 2021',
      companyLink: 'https://sw.skku.edu/sw/index.do',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: '성균관대학교 글로벌융합학부 인공지능융합전공 & 소프트웨어학과(복수전공)',
      degree: 'Undergraduate Student',
      from: '2020',
      to: 'Present',
    },
    {
      institution: '장훈고등학교',
      degree: 'High School',
      from: '2017',
      to: '2019',
    },
    {
      institution: '신도림중학교',
      degree: 'Middle School',
      from: '2014',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '수강한 과목',
      description:
        '성균관대학교에서 수강한 인공지능융합전공 및 소프트웨어학과 강의들',
      imageUrl: 'https://www.skku.edu/_res/skku/img/skku_s.png',
      link: 'BarumK.github.io/lectures.pdf',
    },
    {
      title: 'DiSuO',
      description:
        '인공지능을 활용한 애플리케이션/웹 개발 대회 우승 작품 DiSuo',
      imageUrl: 'https://www.skku.edu/_res/skku/img/skku_s.png',
      link: 'BarumK.github.io/DiSuo.pptx',
    },
    {
      title: 'To be continued..',
      description:
        '추가로 진행된 프로젝트들 추후 업데이트 예정입니다.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
    },
    {
      title: 'To be continued..',
      description:
        '추가로 진행된 프로젝트들 추후 업데이트 예정입니다.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'emerald',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Go to <a 
      class="text-primary" href="https://github.com/BarumK"
      target="_blank"
      rel="noreferrer"
    >Github</a>`,
};

export default config;
