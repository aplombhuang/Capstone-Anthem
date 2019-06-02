import { Injectable } from '@angular/core';

@Injectable()
export class BarChartService {

  constructor() { }

  single = [
    {
      "name": "MBRREF03",
      "value": 72.33
    },
    {
      "name": "MBRREF05",
      "value": 89.62
    },
    {
      "name": "MBRREF06",
      "value": 612
    },
    {
      "name": "MBRREF07",
      "value": 960
    },
    {
      "name": "MBRREF08",
        "value": 899
    },
    {
      "name": "PRVREF01",
      "value": 673.75
    },

  ];

  multiValue = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  areaChartValue = [
    {
      "name": "France",
      "series": [
        {
          "name": "2009",
          "value": 1400
        },
        {
          "name": "2010",
          "value": 1000
        },
        {
          "name": "2011",
          "value": 1500
        },
        {
          "name": "2012",
          "value": 1300
        }
      ]
    }
  ];


  lineChartValue = [
    {
      "name": "Richmond",
      "series": [
        {
          "value": 3000,
          "name": "A"
        },
        {
          "value": 2649,
          "name": "B"
        },
        {
          "value": 2522,
          "name": "C"
        },
        {
          "value": 3235,
          "name": "D"
        },
        {
          "value": 3564,
          "name": "E"
        },
        {
          "value": 3000,
          "name": "F"
        },
        {
          "value": 2649,
          "name": "G"
        },
        {
          "value": 2522,
          "name": "H"
        },
        {
          "value": 3235,
          "name": "I"
        },
        {
          "value": 3564,
          "name": "J"
        }
      ]
    }
  ];
}
