import BoxA from '../assets/images/BoxA.png'
import BoxB from '../assets/images/BoxB.png'
import BoxC from '../assets/images/BoxC.png'
import BoxD from '../assets/images/BoxD.png'
import BoxE from '../assets/images/BoxE.png'
import TuBerlin from '../assets/images/TuBerlin.png'

const data = {
  companyName: "Porous Coatings",
  navbar: [
    {
      location: '/',
      name: 'Home',
    },
    {
      location: '/aboutUs',
      name: 'About Us',
    },
    {
      location: '/services',
      name: 'Services',
    },
    {
      location: '/products',
      name: 'Products',
    },
    {
      location: '/contact',
      name: 'Contact',
    }
  ], 
  products: {
    location: '/products',
    data: [
      {
        id: 1,
        title: "Substrates",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "Flat substrates (ti, glass, Si-wafer, GC)",
            subTypes: []
          },
          {
            type: "Complex substrates: Ti, Ni, SS,  (meshes, expanded metal, perforated meshes, felt, carbon cloth",
            subTypes: []
          },
          {
            type: "Others on request….",
            subTypes: []
          }
        ]
      },
      {
        id: 2,
        title: "Coated Substrates",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "OMC",
            subTypes: []
          },
          {
            type: "ME/OMC",
            subTypes: ["Pt/C", "RuPt/C"]
          },
          {
            type: "Oxides",
            subTypes: ["IrOx", "NiOx", "RuOx", "TiOx", "FexOy", "RuTiOx", "AlxOy", "SiO2", "ZnO2", "MgO"]
          }
        ]
      },
      {
        id: 3,
        title: "Analytical Devices",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "Electrochemical flowcell",
            subTypes: []
          },
          {
            type: "Probe head for resistivity measurement",
            subTypes: []
          }
        ]
      }
    ]
  },
  services: {
    location: '/services',
    data: [
      {
        id: 4,
        title: "Coating Services",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "Dip Coating on your substrate",
            subTypes: []
          }
        ]
      },
      {
        id: 5,
        title: "Analytical Services",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "We measure your material with",
            subTypes: ["SEM", "EDX", "Electrical conductivity"]
          },
          {
            type: "Interpretation",
            subTypes: []
          },
          {
            type: "Speculative measurement of",
            subTypes: ["TEM", "XRD", "..."]
          }
        ]
      },
      {
        id: 6,
        title: "Performance Measurement",
        summary: "Minions ipsum potatoooo bappleees bee do bee do bee do bee do bee do bee do. Butt tank yuuu! Bee do bee do bee do baboiii. Jeje underweaaar potatoooo bananaaaa poulet tikka masala poopayee butt. Uuuhhh belloo! Underweaaar uuuhhh chasy gelatooo jiji tulaliloo para tú. Butt bee do bee do bee do bananaaaa baboiii hahaha ti aamoo! Belloo! Uuuhhh. Aaaaaah jiji tank yuuu! Bappleees bananaaaa bee do bee do bee do po kass hahaha. Gelatooo wiiiii pepete wiiiii para tú baboiii hahaha belloo!",
        imageName: BoxA,
        isActive: false,
        points: [
          {
            type: "OER",
            subTypes: []
          },
          {
            type: "HER",
            subTypes: []
          },
          {
            type: "(RDE, MEA, FlowCell)",
            subTypes: []
          }
        ]
      }
    ]
  },
  aboutUs: {
    summary: "We are a spinoff from the AK Krähnert making Tools, testing and … for your reasearch in academia and industry",
    decriptions: [
      {
        title: "Our team represents expertise in the field of",
        subTitles: [
          "electro-chemistry (see publication i, ii, iii)",
          "material synthesis (see pub 4-6)",
          "material analytics (see stratagem paper EO, etc.)"
        ]
      },
      {
        title: "Our product portfolio covers",
        subTitles: [
          "material synthesis with controlled porosity",
          "electrochemical testing",
          "material analysis",
          "device development"
        ]
      }
    ]
  },
  contact: {
    name: "Cornelia Broicher",
    mobile: "+49-160-7930397",
    address1: "TU Berlin,",
    address2: "Straße des 17 Juni 124,",
    address3: "12063 Berlin.",
    email: "cornelia.broicher@tu-berlin.de"
  },
  clients: [
    {
      name: "TU Berlin",
      imageName: TuBerlin,
    }
  ]
}

export default data