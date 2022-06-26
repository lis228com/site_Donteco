fetch('https://api.openweathermap.org/data/2.5/weather?q=Rostov-on-Don&lang=ru&appid=fa91ef6c45f81a862bd92c4421b52a64')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        // document.querySelector('.city__name').textContent = data.name;
        // document.querySelector('.city__date').innerHTML =new Date(new Date().getTime());
        document.querySelector('.city__temperature').innerHTML = "Температура: " + (data.main.temp-273).toFixed(1) + '&deg;';
        document.querySelector('.city__temperature-average').innerHTML ="Средняя температура: " + ((data.main.temp_min -273 + data.main.temp_max -273)/2).toFixed(1) + '&deg;';
        document.querySelector('.city__icon-description').textContent = data.weather[0]['description'];
        document.querySelector('.city__icon').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

        document.querySelector('.city__pressure').innerHTML = "Давление: " + (data.main.pressure * 0.75).toFixed(1) + " " +  "мм.рт.ст";
        document.querySelector('.city__humidity').innerHTML = "Влажность: " + data.main.humidity + "%";
        document.querySelector('.city__wind-speed').innerHTML = "Скорость ветра: " + (data.wind.speed * 0.277).toFixed(1) + "м/с";
    })




fetch('https://api.openweathermap.org/data/2.5/onecall?lat=47.23&lon=39.72&exclude=hourly&lang=ru&appid=fa91ef6c45f81a862bd92c4421b52a64')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        //document.querySelector('.city__name1').textContent = data.name;
        document.querySelector('.city__temperature1').innerHTML = (data.daily[0].temp.day-273).toFixed(1) + '&deg;';
        document.querySelector('.city__temperature-average1').innerHTML = "Средняя температура: " + ((data.daily[0].temp.min + data.daily[0].temp.max)/2 - 273).toFixed(1) + '&deg;';
        document.querySelector('.city__icon-description1').textContent = data.daily[0].weather[0]['description'];
        document.querySelector('.city__icon1').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.daily[0].weather[0]['icon']}@2x.png">`;

        document.querySelector('.city__temperature2').innerHTML = (data.daily[1].temp.day-273).toFixed(1) + '&deg;';
        document.querySelector('.city__temperature-average2').innerHTML = "Средняя температура: " + ((data.daily[1].temp.min  + data.daily[1].temp.max )/2 - 273).toFixed(1) + '&deg;';
        document.querySelector('.city__icon-description2').textContent = data.daily[1].weather[0]['description'];
        document.querySelector('.city__icon2').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.daily[1].weather[0]['icon']}@2x.png">`;

        document.querySelector('.city__temperature3').innerHTML = (data.daily[2].temp.day-273).toFixed(1) + '&deg;';
        document.querySelector('.city__temperature-average3').innerHTML = "Средняя температура: " + ((data.daily[2].temp.min  + data.daily[2].temp.max)/2 - 273).toFixed(1) + '&deg;';
        document.querySelector('.city__icon-description3').textContent = data.daily[2].weather[0]['description'];
        document.querySelector('.city__icon3').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.daily[2].weather[0]['icon']}@2x.png">`;

        document.querySelector('.city__description').innerHTML = "Дополнительная информация: " + data.alerts[1]['description'] + ". " + data.alerts[3]['description'];
    })




fetch('https://api.openweathermap.org/data/2.5/forecast?lat=47.23&lon=39.72&lang=ru&appid=fa91ef6c45f81a862bd92c4421b52a64')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        // document.querySelector('.city__name').textContent = data.name;
        a=document.querySelector('.city__temperature_1').innerHTML =(data.list[0].main.temp-273).toFixed(1);
        b=document.querySelector('.city__temperature_2').innerHTML =(data.list[1].main.temp-273).toFixed(1);
        c=document.querySelector('.city__temperature_3').innerHTML =(data.list[2].main.temp-273).toFixed(1);
        d=document.querySelector('.city__temperature_4').innerHTML =(data.list[3].main.temp-273).toFixed(1);
        e=document.querySelector('.city__temperature_5').innerHTML =(data.list[4].main.temp-273).toFixed(1);
        f=document.querySelector('.city__temperature_6').innerHTML =(data.list[5].main.temp-273).toFixed(1);
        g=document.querySelector('.city__temperature_7').innerHTML =(data.list[6].main.temp-273).toFixed(1);
        h=document.querySelector('.city__temperature_8').innerHTML =(data.list[7].main.temp-273).toFixed(1);

        // a_=document.querySelector('.city__data').innerHTML =(data.list[0]['dt']);
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Time', 'Температура'],
            ['18:00',  Number(a)],
            ['21:00',  Number(b)],
            ['00:00',  Number(c)],
            ['03:00',  Number(d)],
            ['05:00',  Number(e)],
            ['09:00',  Number(f)],
            ['12:00',  Number(g)],
            ['15:00',  Number(h)]
          ]);
  
          var options = {
            title: 'График температуры на сутки',
            curveType: 'function',
            legend: { position: 'bottom' }
          };
  
          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  
          chart.draw(data, options);
        }
    })




    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=47.23&lon=39.72&lang=ru&appid=fa91ef6c45f81a862bd92c4421b52a64')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        // document.querySelector('.city__name').textContent = data.name;
        a_=document.querySelector('.city__temperature__1').innerHTML =(data.list[6].main.temp-273).toFixed(1);
        b_=document.querySelector('.city__temperature__2').innerHTML =(data.list[7].main.temp-273).toFixed(1);
        c_=document.querySelector('.city__temperature__3').innerHTML =(data.list[8].main.temp-273).toFixed(1);
        d_=document.querySelector('.city__temperature__4').innerHTML =(data.list[9].main.temp-273).toFixed(1);
        e_=document.querySelector('.city__temperature__5').innerHTML =(data.list[10].main.temp-273).toFixed(1);
        f_=document.querySelector('.city__temperature__6').innerHTML =(data.list[11].main.temp-273).toFixed(1);
        g_=document.querySelector('.city__temperature__7').innerHTML =(data.list[12].main.temp-273).toFixed(1);
        h_=document.querySelector('.city__temperature__8').innerHTML =(data.list[13].main.temp-273).toFixed(1);
        i_=document.querySelector('.city__temperature__9').innerHTML =(data.list[14].main.temp-273).toFixed(1);
        j_=document.querySelector('.city__temperature__10').innerHTML =(data.list[15].main.temp-273).toFixed(1);
        k_=document.querySelector('.city__temperature__11').innerHTML =(data.list[16].main.temp-273).toFixed(1);
        l_=document.querySelector('.city__temperature__12').innerHTML =(data.list[17].main.temp-273).toFixed(1);
        m_=document.querySelector('.city__temperature__13').innerHTML =(data.list[18].main.temp-273).toFixed(1);

        // a_=document.querySelector('.city__data').innerHTML =(data.list[0]['dt']);
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Time', 'Температура'],
            ['12:00',  Number(a_)],
            ['18:00',  Number(b_)],
            ['00:00',  Number(c_)],
            ['06:00',  Number(d_)],
            ['12:00',  Number(e_)],
            ['18:00',  Number(f_)],
            ['00:00',  Number(g_)],
            ['06:00',  Number(h_)],
            ['12:00',  Number(i_)],
            ['18:00',  Number(j_)],
            ['00:00',  Number(k_)],
            ['06:00',  Number(l_)],
            ['12:00',  Number(m_)]
          ]);
  
          var options = {
            title: 'График температуры на 3 дня',
            curveType: 'function',
            legend: { position: 'bottom' }
          };
  
          var chart = new google.visualization.LineChart(document.getElementById('curve_chart-1'));
  
          chart.draw(data, options);
        }
    })
