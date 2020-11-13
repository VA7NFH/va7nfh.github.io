import { faDiscord, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

let data = {
  "header": {
    "links": [
      {
        name: "About",
        link: "/about",
        subs: []
      },
      {
        name: "Components",
        link: "/components",
        subs: [
          {
            name: "Sparrow",
            link: '/engines/sparrow'
          }
        ]
      },
      {
        name: "Phoenix",
        link: "/phoenix",
        subs: []
      }
    ]
  },
  "footer": {
    "socials": [
      {
        link: "https://www.youtube.com/channel/UCcDWszakBaLDEjaqmg8X-vg",
        icon: faYoutube
      },
      {
        link: "https://discord.gg/WhFJJyY",
        icon: faDiscord
      },
      {
        link: "https://github.com/stellarspacesystems/",
        icon: faGithub
      }
    ]
  },
  "about": {
    "team": [
      {
        name: "Nathaniel Hargrave",
        position: "CEO & Founder",
        img: ""
      }
    ]
  }
}

export default data;
