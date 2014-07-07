(function() {
  $(function() {
    $("#map").tinyMap({
      center: "捷運忠孝復興站",
      scrollwheel: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 14,
      marker: [
        {
          addr: ["25.033972149830436", "121.56063079833984"]
        }, {
          addr: ["25.031794640503858", "121.56414985656738"]
        }, {
          addr: ["25.035255306871402", "121.56998634338379"]
        }, {
          addr: ["25.033855498524844", "121.5686559677124"]
        }, {
          addr: ["25.036927279240775", "121.57376289367676"]
        }, {
          addr: '捷運忠孝復興站',
          text: '捷運忠孝復興站'
        }
      ],
      circle: [
        {
          center: {
            x: 25.047924,
            y: 121.51708099999996
          },
          radius: 500,
          width: 1,
          color: '#de4c5f',
          fillcolor: '#de4c5f'
        }, {
          center: {
            x: 25.038,
            y: 121.56399999999996
          },
          radius: 400,
          widrth: 3,
          color: '#FF0000',
          fillcolor: '#CC0000'
        }
      ],
      markerCluster: true
    });
  });

  $(function() {
    return $('.carousel').carousel({
      interval: 8000,
      pause: true,
      interval: false
    });
  });

  return;

}).call(this);
