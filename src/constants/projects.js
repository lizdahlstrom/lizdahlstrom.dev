import { tags } from './tags';

export const projects = [
  {
    title: 'VibeDuck',
    description: [
      'The purpose of the project was to develop a web application that generates customized Spotify playlists. The application would offer an alternate way of discovering new music, and of creating playlists suited to any personal taste that the Spotify user might have. By first letting the user input data such as tracks, artists and/or genres they prefer and optional further parameters, the application would then be able offer to generate a playlist based on it. The result would be a highly customized, and automatically generated Spotify playlist – all done in a brief moment.',
      ' The project has been planned, documented, developed and tested over a time period of 10 weeks, and for a total of nearly 200 hours. It was started off by the authoring of a vision document which was used as a baseline for the project. Following Linnaeus University’s tailor-made version of Unified process (UP), the project went through the phases: “inception”, “elaboration”, “construction” and “transition”. Scrum was used to plan and implement the development on a week to week basis, with the use of weekly “sprints” and the Scrum artifacts Product backlog and Sprint backlogs. Weekly tutor-led Scrum-like meetings were attended to with a small group of students each working on their own separate projects.',
    ],
    image: '/images/vibeduck.png',
    tags: [
      tags.ReactJs,
      tags.JavaScript,
      tags.MaterialUI,
      tags.NodeJs,
      tags.Firebase,
    ],
    source: 'https://github.com/lizdahlstrom/VibeDuck',
    visit: 'https://vibeduck.lizdahlstrom.dev',
    id: 0,
  },
  {
    title: 'Ziggato',
    description: [
      'A Discord bot built with the help of DiscordJS API and NodeJS. Ziggato can do the following:\n - Get gifs from Giphy\n - Convert currencies\n- Get a variety of jokes\n - Fetch lyrics\n- Display games that are in common between steam users\n - Translate text using Google translate\n- Unit conversion\n- Create Watch2Gether rooms\n - Search and display Wikipedia entries\n- Show synonyms or rhymes of words',
    ],
    image: '/images/ziggato.png',
    tags: [tags.JavaScript, tags.NodeJs],
    source: 'https://github.com/lizdahlstrom/ziggato',
    id: 1,
  },
  {
    title: 'Portfolio',
    description: ['This website.'],
    image: '/images/pwd.png',
    tags: [tags.ReactJs, tags.NextJS, tags['styled-components']],
    source: 'https://github.com/lizdahlstrom/lizdahlstrom.dev',
    visit: '#',
    id: 2,
  },
  {
    title: 'Personal Web Desktop',
    description: [
      'This project is a single page application built in React. It simulates a desktop that the user can open different windows and applications on. The following three applications are included in the desktop application: A memory game, a chat connected to a central chat channel using web sockets, and a Wikipedia search app.',
    ],
    image: '/images/pwd.png',
    tags: [tags.JavaScript, tags.ReactJs, tags['Web sockets']],
    source: 'https://github.com/lizdahlstrom/Personal-Web-Desktop',
    id: 3,
  },
];
