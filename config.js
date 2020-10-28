var config = {
    style: 'mapbox://styles/ashbo2/ckgpe8dyu0q3419qmjy2sjjhc',
    accessToken: 'pk.eyJ1IjoiYXNoYm8yIiwiYSI6ImNrZ2ZnYjJ2ODFrMDkyc21pMjc5YXh3eDMifQ.HL-KcetumT5j0SkWCZf3_A',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    // title: 'From Vacant Lots to Permanently Affordable Housing',
    // subtitle: 'Leveraging vacant properties in Chicago for affordable housing',
    // byline: 'By Jennah Haque, Chenab Navalkha, and Asher Simon',
    footer: 'Source: City of Chicago Data Portal',
    chapters: [
      {
          id: 'slug-style-id-1',
          title: 'Chicago',
          // image: './path/to/image/source.png',
          description: '',
          location: {
              center: [-87.62584, 41.87269],
              zoom: 9,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
               {
                   layer: 'affordable-rental-housing-develo',
                   opacity: 0
               }
          ],
          onChapterExit: [
               {
                   layer: 'affordable-rental-housing-develo',
                   opacity: 0
               }
          ]
      },
        {
            id: 'slug-style-id',
            title: 'Affordable Rental Housing Developments',
            // image: './path/to/image/source.png',
            description: 'Current affordable rental housing developments in the city of Chicago. This shows the efforts already in place by the city to address the affordability crisis.',
            location: {
                center: [-87.62584, 41.87269],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'affordable-rental-housing-develo',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'affordable-rental-housing-develo',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'other-identifier',
            title: 'City-Owned Land Inventory',
            // image: './path/to/image/source.png',
            description: 'Current city-owned land inventory in Chicago. This land could serve as potential sites for new affordable housing.',
            location: {
                center: [-87.62584, 41.87269],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'city-owned-land-inventory-no-z',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'city-owned-land-inventory-no-z',
                     opacity: 0
                 }
            ]
        },
    ]
};
