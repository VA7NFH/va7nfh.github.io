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
          },
          {
            name: "Hummingbird",
            link: '/engines/hummingbird'
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
    ],
    "abouttext": "Stellar Space Systems is dedicated to expanding in-space tranportation services. In the near future, many private space stations will grow in low-earth orbit and as in-space manufacturing grows, we will need a way to transport materials and products from station to station. We also provide components for those who want to build their own."
  }
}

export default data;
