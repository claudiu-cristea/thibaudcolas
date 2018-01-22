(function(MG) {
    'use strict';

    var data3 = [
        { year: new Date('1991-01-01'), migration: 6397},
        { year: new Date('1992-01-01'), migration: 4640},
        { year: new Date('1993-01-01'), migration: 13985},
        { year: new Date('1994-01-01'), migration: 19857},
        { year: new Date('1995-01-01'), migration: 28486},
        { year: new Date('1996-01-01'), migration: 24793},
        { year: new Date('1997-01-01'), migration: 7624},
        { year: new Date('1998-01-01'), migration: -6265},
        { year: new Date('1999-01-01'), migration: -9029},
        { year: new Date('2000-01-01'), migration: -11312},
        { year: new Date('2001-01-01'), migration: 9726},
        { year: new Date('2002-01-01'), migration: 38198},
        { year: new Date('2003-01-01'), migration: 34906},
        { year: new Date('2004-01-01'), migration: 15108},
        { year: new Date('2005-01-01'), migration: 6971},
        { year: new Date('2006-01-01'), migration: 14609},
        { year: new Date('2007-01-01'), migration: 5491},
        { year: new Date('2008-01-01'), migration: 3814},
        { year: new Date('2009-01-01'), migration: 21253},
        { year: new Date('2010-01-01'), migration: 10451},
        { year: new Date('2011-01-01'), migration: -1855},
        { year: new Date('2012-01-01'), migration: -1165},
        { year: new Date('2013-01-01'), migration: 22468},
        { year: new Date('2014-01-01'), migration: 50922}
    ];

    MG.data_graphic({
        title: "Net migration",
        description: "",
        data: data3,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        target: '#chart3',
        x_accessor: 'year',
        y_accessor: 'migration',
        markers: [],
        animate_on_load: true
    });

    var data2 = [
        { year: new Date('1991-01-01'), arrivals: 50578, departures: 44181},
        { year: new Date('1992-01-01'), arrivals: 48144, departures: 43504},
        { year: new Date('1993-01-01'), arrivals: 55081, departures: 41096},
        { year: new Date('1994-01-01'), arrivals: 64382, departures: 44525},
        { year: new Date('1995-01-01'), arrivals: 77563, departures: 49077},
        { year: new Date('1996-01-01'), arrivals: 79005, departures: 54212},
        { year: new Date('1997-01-01'), arrivals: 67636, departures: 60012},
        { year: new Date('1998-01-01'), arrivals: 58220, departures: 64485},
        { year: new Date('1999-01-01'), arrivals: 59743, departures: 68772},
        { year: new Date('2000-01-01'), arrivals: 62994, departures: 74306},
        { year: new Date('2001-01-01'), arrivals: 81094, departures: 71368},
        { year: new Date('2002-01-01'), arrivals: 95951, departures: 57753},
        { year: new Date('2003-01-01'), arrivals: 92660, departures: 57754},
        { year: new Date('2004-01-01'), arrivals: 80479, departures: 65371},
        { year: new Date('2005-01-01'), arrivals: 78963, departures: 71992},
        { year: new Date('2006-01-01'), arrivals: 82732, departures: 68123},
        { year: new Date('2007-01-01'), arrivals: 82572, departures: 77081},
        { year: new Date('2008-01-01'), arrivals: 87463, departures: 83649},
        { year: new Date('2009-01-01'), arrivals: 86410, departures: 65157},
        { year: new Date('2010-01-01'), arrivals: 82469, departures: 72018},
        { year: new Date('2011-01-01'), arrivals: 84187, departures: 86042},
        { year: new Date('2012-01-01'), arrivals: 85255, departures: 86420},
        { year: new Date('2013-01-01'), arrivals: 93965, departures: 71497},
        { year: new Date('2014-01-01'), arrivals: 109317, departures: 58395}
    ];

    MG.data_graphic({
        title: "Migrant arrivals and departures",
        description: "",
        data: data2,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        aggregate_rollover: true,
        target: '#chart2',
        x_accessor: 'year',
        y_accessor: ['arrivals', 'departures'],
        markers: [],
        legend: ['Arrivals', 'Departures'],
        legend_target: '#legend2'
    });

    var data1 = [
        { year: new Date('1991-01-01'), marriages: 21841, divorces: 9152},
        { year: new Date('1992-01-01'), marriages: 20804, divorces: 9114},
        { year: new Date('1993-01-01'), marriages: 20802, divorces: 9193},
        { year: new Date('1994-01-01'), marriages: 20587, divorces: 9213},
        { year: new Date('1995-01-01'), marriages: 20452, divorces: 9574},
        { year: new Date('1996-01-01'), marriages: 20453, divorces: 10009},
        { year: new Date('1997-01-01'), marriages: 19953, divorces: 9754},
        { year: new Date('1998-01-01'), marriages: 20135, divorces: 10067},
        { year: new Date('1999-01-01'), marriages: 21085, divorces: 9931},
        { year: new Date('2000-01-01'), marriages: 20655, divorces: 9699},
        { year: new Date('2001-01-01'), marriages: 19972, divorces: 9683},
        { year: new Date('2002-01-01'), marriages: 20690, divorces: 10292},
        { year: new Date('2003-01-01'), marriages: 21419, divorces: 10491},
        { year: new Date('2004-01-01'), marriages: 21006, divorces: 10609},
        { year: new Date('2005-01-01'), marriages: 20470, divorces: 9972},
        { year: new Date('2006-01-01'), marriages: 21423, divorces: 10065},
        { year: new Date('2007-01-01'), marriages: 21494, divorces: 9650},
        { year: new Date('2008-01-01'), marriages: 21948, divorces: 9713},
        { year: new Date('2009-01-01'), marriages: 21628, divorces: 8737},
        { year: new Date('2010-01-01'), marriages: 20940, divorces: 8874},
        { year: new Date('2011-01-01'), marriages: 20231, divorces: 8551},
        { year: new Date('2012-01-01'), marriages: 20521, divorces: 8785},
        { year: new Date('2013-01-01'), marriages: 19237, divorces: 8279},
        { year: new Date('2014-01-01'), marriages: 20125, divorces: 8171}
    ];

    MG.data_graphic({
        title: "Marriages",
        description: "",
        data: data1,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        linked: true,
        animate_on_load: true,
        target: '#chart1',
        x_accessor: 'year',
        y_accessor: 'marriages',
        markers: []
    });

    MG.data_graphic({
        title: "Divorces",
        description: "",
        data: data1,
        full_width: true,
        height: 150,
        area: false,
        y_axis: false,
        x_axis: false,
        linked: true,
        animate_on_load: true,
        target: '#chart0',
        x_accessor: 'year',
        y_accessor: 'divorces',
        markers: []
    });

})(window.MG);