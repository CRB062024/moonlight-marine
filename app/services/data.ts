export type Service = {
  title: string;
  slug: string;
  paragraphs: string[];
  bullets?: string[];
};

export const services: Service[] = [
  {
    title: "General", slug: "general",
    paragraphs: [
      "We strive to give the best service possible. We will return all calls within 24 hours, all emails within 48 hours. We will make every attempt possible to have someone aboard your vessel within 96 hours of initial contact, if for nothing else than a quick appraisal and assessment of your project.",
      "Due to the wide nature and complexity of most marine repairs, we do not provide free estimates. Each project requires an individual consultation, however, some standard services can be quoted over the phone. All jobs are strictly on a time and materials basis, and we assume no liability for frozen or seized fasteners or other difficult access conditions created by your vessel and its configuration and/or maintenance history."
    ]
  },
  {
    title: "Diving", slug: "diving",
    paragraphs: [
      "From precious item recovery, marine salvage, or regular hull cleaning, our divers are on call 24 hours a day, seven days a week. With hourly rates as low as $125, we have:",
      "Hull cleanings as low as $3/ft on quarterly services, or $5–7 annually depending upon fouling rate. Prop, shaft, and zinc changes as well as in-slip thru-hull installations are also available. Give us a call for your next diving need!"
    ],
    bullets: ["Removed underwater obstructions", "Recovered vehicles", "Found valuable items dropped overboard", "And more"]
  },
  {
    title: "Electrical", slug: "electrical",
    paragraphs: [
      "Our ABYC-certified marine electrical technicians have over 15 years of marine wiring and troubleshooting experience. Whether you’re adding service, upgrading existing, or hunting down those pesky gremlins or ghosts that have developed over time, we can come to your aid.",
      "We stock over 5,000 feet of marine-grade wire at any time, and utilize the ABYC color code in all work. From complete rewiring to power balancing with charging systems, let us design and build your new system today."
    ]
  },
  {
    title: "Electronics", slug: "electronics",
    paragraphs: [
      "We don’t sell them, but we service them all! Furuno, Garmin, JRC, Raymarine, and more. We can install, configure, and optimize NMEA 0183, NMEA 2000, Seatalk, and other systems to help you get the most from your electronic aids.",
      "We install AIS and satellite systems as well. Let us make sure the data is available and ready when you are, and that varied components share the appropriate data correctly. Garmin and Lowrance certified installations."
    ]
  },
  {
    title: "Maintenance", slug: "maintenance",
    paragraphs: [
      "From gentle weekly washdowns to deep pre- or post-season scrubbing, we can fulfill your every need.",
      "All scheduled wash services include checks of critical operational fluids, topping off from your inventory on hand as necessary; and operation of all critical machinery to operating temperature. Let us make sure your vessel is ready to go, when you are!",
      "Weekly washes from $3/ft. Bi-weekly washes from $4/ft. Monthly washes from $5/ft. Compounding and waxing from $25/ft."
    ]
  },
  {
    title: "Mechanical", slug: "mechanical",
    paragraphs: [
      "Repower, or rebuild? Tune up, or tone down? Let us service and support your propulsion and power generation machinery on site. We can pull exchanger bundles, optimize exhaust systems, install fuel polishing systems, and more.",
      "Gas or diesel, electric or hydraulic, we’ll keep all your shipboard systems in tip-top shape, ready for your immediate sailing. Avoid unnecessary downtime with our planned and predictive maintenance schedules."
    ]
  },
  {
    title: "Plumbing", slug: "plumbing",
    paragraphs: [
      "Freshwater, gray water, or blackwater—we can plumb and fit your every need. We service all major brands including VacuFlush and Type I, II, and III MSDs. Mobile pumpouts are also available."
    ]
  },
  {
    title: "Salvage", slug: "salvage",
    paragraphs: [
      "Not that anyone would want such experience on their résumé, but we’ve got it. Through Hurricanes Isidore, Lili, Katrina, Rita, Gustav, and Ike, all affecting Southeast Louisiana, we’ve made recoveries that others have declined to try.",
      "When “No” just isn’t an option, we can lift, pull, drag, or float vessels that others could not. We’ve never lost a single vessel of our own either in a storm or in a recovery operation, so we can assist with your preplanning needs as well. Know where to go, and how to get there, before you need to."
    ]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
