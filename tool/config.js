var configEnv = function(app){
    switch(process.env.NODE_ENV){
		case "test":
			app.set("baseURL","http://172.16.10.40:8101");
			app.set("hap","http://172.16.10.40:9400");
			app.set("exerciseapi","http://172.16.10.40:8106");
			app.set("cookiedomain",".huitong.com");
			break;
        case "testa":
            app.set("baseURL","http://172.16.10.41:8101");
            app.set("hap","http://172.16.10.32:9400");
			app.set("exerciseapi","http://172.16.10.41:8106");
            app.set("cookiedomain",".huitong.com");
            break;
        case "zhitiku":
            app.set("baseURL","http://web.emp.api.zhitiku.cn");
            app.set("hap","http://web.ai.api.zhitiku.cn");
			app.set("exerciseapi","http://web.exercise.zhitiku.cn");
            app.set("cookiedomain",".zhitiku.cn");
            break;
        case "online":
            app.set("baseURL","http://web.emp.api.willclass.com");
            app.set("hap","http://web.ai.api.willclass.com");
			app.set("exerciseapi","http://web.exercise.willclass.com");
            app.set("cookiedomain",".willclass.com");
            break;
    }
}

module.exports = {
    configEnv: configEnv
};