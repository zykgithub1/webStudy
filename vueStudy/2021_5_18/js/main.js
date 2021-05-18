var app=new Vue({
    el:"#app",
    data:{
        city:"",
        weatherList:[]

    },
    methods:{
        searchWeather:function () {
            var that=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then(function (response) {
                // console.log(response);
                that.weatherList=response.data.data.forecast;
                console.log(that.weatherList);
            }).catch(function (err) {
                console.log(err);
            })
        },
        changeCity:function (city) {
            this.city=city;
            this.searchWeather();
        }
    }
})