document.addEventListener("DOMContentLoaded",function(){
    let ussd=window.prompt("Enter your USSD");
    while(ussd==="" || ussd !=="*544#"){
        ussd=window.prompt("Invalid choice \n Enter your USSD")
    }
      function payment(){
        let pay=window.prompt("Pay with \n 1:Mpesa \n 2:Airtime \n 3:Okoa ")

        while(pay !=="1" && pay !=="2" && pay !=="3"){
            pay=window.prompt("Enter a valid number \n Pay with: \n 1:Mpesa \n 2:Airtime \n 3:Okoa ")
        }

        switch (pay) {
            case "1":
                let mpesapin=window.prompt("Enter your Mpesa pin")
                while(mpesapin.length!=4){
                    mpesapin=window.prompt("Invalid pin \n Enter your Mpesa pin")

                }
                mpesapin=Number(mpesapin)
                while(isNaN(mpesapin)){
                    mpesapin=window.prompt("Enter your Mpesa pin")
                }
              return "Mpesa";
            case "2":
              return "Airtime";
            case "3":
              return "Okoa";
            default:
              return null;
        }
 
    }
    function amount(){
        let amount=window.prompt("Enter amount")
        amount=Number(amount)
        while(amount<10){
            amount=window.prompt("Too low \n Enter amount")
        }
        
        while(isNaN(amount)){
            amount=window.prompt("Not a valid amount \n Enter amount")
        }
        return amount;
    }
  
    function D_P_1(){
        let offer=window.prompt("Data Plus bundles come with additional benefit \n 1:FREE Britam Cover \n 2: FREE 100 MB Tik Tok Bundle \n 3:FREE 100MB You Tube bundle \n 4:Free games \n 5:12 Hours Boomplay Suscription")
                while(offer !=="1" && offer !=="2" && offer !=="3" && offer !=="4" && offer !=="5"){
                    offer=window.prompt("Invalid Optin \n Data Plus bundles come with additional benefit \n 1:FREE Britam Cover \n 2: FREE 100 MB Tik Tok Bundle \n 3:FREE 100MB You Tube bundle \n 4:Free games \n 5:12 Hours Boomplay Suscription")
                }
                let w_offer;
                switch(offer){
                    case "1":
                        w_offer="You Have received FREE Britam Cover"
                        break;
                    case "2":
                        w_offer="You Have received FREE 100 MB Tik Tok Bundle"
                        break;
                    case "3":
                        w_offer="You Have received FREE 100MB You Tube bundle "
                        break;
                    case "4":
                        w_offer="You Have received Free Games"
                        break;
                    case "5":
                        w_offer="You Have received 12 Hour Boomplay Subscription"
                        break;
                }
                alert(`Congratulations!! \n ${w_offer}`)

    }
    function another(){
        let number=window.prompt("Enter number")
        while(number.length !=10){
            number=window.prompt("Too short \n Enter number")
        }
        number=Number(number)
        while(isNaN(number)){
            number=window.prompt("Not a valid number \n Enter number")
        }
        if(number){
            return number;
        }
    }
    function M_showmax(){
        let choicem=window.prompt("1:Sh 450=Premier League+3 GB ,30 days \n 2: Sh 300=Entertainment+1.5GB ,30 days \n 3: Sh 650=Entertainment+2.5 GB, 30Days \n 4:Opt out \n 5:About Show max")
            while(choicem!=="0" && choicem!=="1" && choicem!=="2" && choicem!=="3" && choicem!=="4" && choicem!=="5"){
                choicem=window.prompt("Invalid choice \n 1:Sh 450=Premier League+3 GB ,30 days \n 2: Sh 300=Entertainment+1.5GB ,30 days \n 3: Sh 650=Entertainment+2.5 GB, 30Days \n 4:Opt out \n 5:About Show max")
            }
            switch(choicem){
                case "1":
                    offer="Sh 450=Premier League+3 GB ,30 days "
                    break;
                case "2":
                    offer="Sh 300=Entertainment+1.5GB ,30 days "
                    break;
                case "3":
                    offer="Sh 650=Entertainment+2.5 GB, 30Days "
                    break;
                case "4":
                    alert("You are not subscribed")
                    break;
                case "5":
                    alert("You will receive an sms shortly")

            }
            if(choicem!=="4" && choicem !=="5"){
                let mode=payment()
                alert(`Purchase of ${offer} through ${mode} successfull. \n Safaricom .Twaweza`)
            }
        }
    function Make_ur_Bundle() {
        let offer = window.prompt("Enter your preferred validity \n1:1 Hour \n 2:3 Hours \n 3:Midnight \n 4:24 Hours \n 5:3 Days \n 6:7 Days \n 7:15 Days \n 8:30 Days \n 0:BACK");

        if (offer === "0") {
            return Data_Deals();
        }

        let amount = window.prompt("Enter amount you wish to spend \n Range(1-130)");
        amount = Number(amount);
        while (isNaN(amount) || amount < 1 || amount > 130) {
            amount = window.prompt("Invalid choice \n Enter amount you wish to spend \n Range(1-130)");
            amount = Number(amount);
        }
    
        let selectedOffer;
        let mode=payment()
        switch (offer) {
            case "1":
                selectedOffer = `1 Hour for ${amount} Shillings`;
                break;
            case "2":
                selectedOffer = `3 Hours for ${amount} Shillings`;
                break;
            case "3":
                selectedOffer = `Midnight bundle for ${amount} Shillings`;
                break;
            case "4":
                selectedOffer = `24 Hours for ${amount} Shillings`;
                break;
            case "5":
                selectedOffer = `3 Days for ${amount} Shillings`;
                break;
            case "6":
                selectedOffer = `7 Days for ${amount} Shillings`;
                break;
            case "7":
                selectedOffer = `15 Days for ${amount} Shillings`;
                break;
            case "8":
                selectedOffer = `30 Days for ${amount} Shillings`;
                break;
            default:
                selectedOffer = "Invalid choice!";
        }
        if(amount&& offer){
            alert(`Purchase of ${selectedOffer} through ${mode} successfull`)
        }
    }
    let choice;
    function T_Y(){
        let offer=window.prompt("1:Sh 10=1GB 1 hr \n 2: Sh 10=150 MB 24 hours \n 3:Sh 20=450 MB 24 hours \n 4:Sh 50=1.2GB 24hours \n 0:HOME")
        while(offer!=="0" && offer!=="1" && offer!=="2" && offer!=="3" && offer!=="4"){
            offer=window.prompt("Invalid Choice \n 1:Sh 10=1GB 1 hr \n 2: Sh 10=150 MB 24 hours \n 3:Sh 20=450 MB 24 hours \n 4:Sh 50=1.2GB 24hours \n 0:HOME")
        }
        switch(offer){
            case "1":
                choice="Sh 10=1GB 1 hr"
                break;
            case "2":
                choice="Sh 10=150 MB 24 hours"
                break;
            case "3":
                choice="Sh 20=450 MB 24 hours"
                break;
            case "4":
                choice="Sh 50=1.2GB 24hours"
                break;
        }
        if(offer !=="0"){
            let mode=payment()
            alert(`Purchase of ${choice} through ${mode} successfull.\n Safaricom. Twaweza`)
        }
        else{
            M_Choice()
        }
    }
   
    function Gift_a_Friend(){
        let offer=window.prompt("Gift yourself or a friend \n 1:Sh 100=2GB 24Hrs \n 2:Sh 20=1GB 1hr \n 3:Sh 50=1.5GB 3hr")
        while(offer !=="1" && offer !=="2" && offer !=="3"){
            offer=window.prompt("Invalid choice \n Gift yourself or a friend \n 1:Sh 100=2GB 24Hrs \n 2:Sh 20=1GB 1hr \n 3:Sh 50=1.5GB 3hr")
        }
        if(offer){
            let number=another()
            let choice;
            switch(offer){
                case "1":
                    choice="100=2GB 24Hrs"
                    break;
                case "2":
                    choice="Sh 20=1GB 1hr"
                    break;
                case "3":
                    choice="Sh 50=1.5GB 3hr"
                    break;
           
            }
            if(number && offer){
                let mode=payment()
                alert(`Purchase of ${choice} for ${number} though ${mode} Successful \n Safaricom. Twaweza`)
            }
        }
            }
    function M_Choice(){
        let option=window.prompt("0:Sh100=2GB 24hrs\n 1:Data Deals \n 2:Daily \n 3:Weekly \n 4:Go Monthly \n 5: Make ur Bundle \n 6:Okoa Data \n 7:No Expiry \n 8:Videos \n 9:Lipa Mdogo \n 10:Data Plus \n 11:Epl \n 12:Gift \n 98:MORE")

        while (option !=="0" && option !=="1" && option !=="2" && option !=="3" && option !=="4" && option !=="5" && option !=="6" && option !=="7" && option !=="8" && option !=="9" && option !=="10" && option !=="11" && option !=="12" && option!=="98"){
            option=window.prompt("Enter a valid option \n 0:Sh100=2GB 24hrs\n 1:Data Deals \n 2:Daily \n 3:Weekly \n 4:Go Monthly \n 5: Make ur Bundle \n 6:Okoa Data \n 7:No Expiry \n 8:Videos \n 9:Lipa Mdogo \n 10:Data Plus \n 11:Epl \n 12:Gift \n 98:MORE")
        }
        switch(option){
            case "0":
                let mode=payment()
                alert(`Purchase of Sh100=2GB 24hrs through ${mode} Successful`)
                break;
            case "1":
                Data_Deals();
                break;
            case "2":
                Daily();
                break;
            case "3":
                Weekly();
                break;
            case "4":
                Go_Monthly();
                break;
            case "5":
                Make_ur_Bundle()
                break;
            case "6":
                Okoa_Data();
                break;
            case "7":
                No_Expiry();
                break;
            case "8":
                Videos();
                break;
            case "9":
                Lipa_Mdogo();
                break;
            case "10":
                D_P_1()
                break;
            case "11":
                M_showmax();
                break;
            case "12":
                Gift_a_Friend()
                break;  
            case "98":
                MORE();
                break;
           
            default:
                return null
        }
      
    }
 
    M_Choice()
  
    function Data_Deals(){
        let offer2=window.prompt("1:Daily+hourly \n 2:Weekly+monthly \n 3: Sh 20=1GB 1hr \n 4:Make ur Bundle \n 5:TUNUKIWA \n 6:Sherehe Bundles \n 7: GIFT a FRIEND \n 8:Unlock Baze Bonus \n 9:Nyakua Bonus \n 0:BACK")
        while(offer2 !=="1" && offer2 !=="2" && offer2 !=="3" && offer2 !=="4" && offer2 !=="5" && offer2 !=="6" && offer2 !=="7" && offer2 !=="8" && offer2 !=="9" && offer2!=="0"){
            offer2=window.prompt("Invalid choice !! \n 1:Daily+hourly \n 2:Weekly+monthly \n 3: Sh 20=1GB 1hr \n 4:Make ur Bundle \n 5:TUNUKIWA \n 6:Sherehe Bundles \n 7: GIFT a FRIEND \n 8:Unlock Baze Bonus \n 9:Nyakua Bonus \n 0:BACK")
        }
        let choice;
        switch(offer2){
            case "1":
                return Daily_hourly()
                function Daily_hourly(){
                    let offer=window.prompt("1:Sh 20=1.25GB 1hr \n 2:Sh 50=1.5GB 3hr")
                    while(offer !=="1" && offer!=="2"){
                        offer=window.prompt("Invalid choice \n 1:Sh 20=1.25GB 1hr \n 2:Sh 50=1.5GB 3hr")
                    }
                    let choice;
                    switch(offer){
                        case "1":
                            choice="Sh 20=1.25GB 1hr"
                            break;
                        
                        case "2":
                            choice= "Sh 50=1.5GB 3hrs"
                            break
                    }
                    let mode=payment()
                    if(choice && mode){
                        alert(`Purchase of ${choice} using ${mode} Successful. \n Safaricom . Twaweza`)
                    }
                }
   
            case "2":
                return weekly_monthly();
                function weekly_monthly(){
                    let offer=window.prompt("1:Sh 1500=25GB 30 Days \n 2:Sh2000=35GB 30 Days")
                    while(offer !=="1" && offer !=="2"){
                        offer=window.prompt("Invalid choice \n1:Sh 1500=25GB 30 Days \n 2:Sh2000=35GB 30 Days")
                    }
                    mode=payment()
                }
            case "3":
                let choice="Sh 20=1GB 1hr"
                mode=payment()
                if(offer2){
                    alert(`Purhase of ${choice} through ${mode} Successfull \n Safaricom.Twaweza`)
                }
                break;
            case "4":
                Make_ur_Bundle()

                break;
             case "5":
                return Tunukiwa()
                function Tunukiwa(){
                    let offer=window.prompt("1:Sh 20=1GB 1hr \n 2:Sh 20=500 MB 3Hrs \n 3:Sh 99=1GB 24 Hours \n 4:Sh 100=2GB 3Dys \n 5:Sh 50=5GB till 6am today \n 6:Sh 60=1.3GB till midnight \n 98: More \n 0:BACK")
                    while (offer !=="1" && offer !=="2" && offer !=="3" && offer !=="4" && offer !=="5" && offer !=="6" && offer !=="7" && offer !=="98" && offer !=="0"){
                        offer=window.prompt("Invalid choice \n 1:Sh 20=1GB 1hr \n 2:Sh 20=500 MB 3Hrs \n 3:Sh 99=1GB 24 Hours \n 4:Sh 100=2GB 3Dys \n 5:Sh 50=5GB till 6am today \n 6:Sh 60=1.3GB till midnight \n 98: More \n 0:BACK")
                    }

                    if(offer !=="98" && offer !=="0"){
                        return payment()
                        
                    }
                    else if(offer=="0"){
                        return Data_Deals()
                    }
                    else{
                        offer=window.prompt("1:Sh 1000=200GB 30 Days 5G Ready")
                        while(offer !=="1"){
                            offer=window.prompt("Invalid choice \n 1:Sh 1000=200GB 30 Days 5G Ready")
                        }
                        mode=payment()
                        if(mode && offer){
                            alert(`Purchase of ${offer} using ${mode} Successful .\n Safaricom .Twaweza`)
                        }
                    }
                    

                }
            case "6":
                return Sherehe_bundles()
                function Sherehe_bundles(){
                    let offer=window.prompt("1:Enter amount to spend(Sh50-Sh 10000) \n 2: Enter Data in (MBs)that you use daily(10MBs-850000MBs) \n 0: Back)")
                    offer=Number(offer)

                    while (offer !=="0" && offer !=="1" && offer !=="2" ){
                        offer=window.prompt("Invalid Choice \n 1:Enter amount to spend(Sh50-Sh 10000 \n 2: Enter Data in (MBs)that you use daily(10MBs-850000MBs) \n 0: Back")
                    }

                   if(offer=="1"){
                        let amount=window.prompt("Enter amount to spend(Sh50-Sh 10000)")
                        amount=Number(amount)
                        while(isNaN(amount) || amount<50 || amount>10000){
                            amount=window.prompt("Invalid.Enter a number within the range \n Enter amount to spend(Sh50-Sh 10000)")
                            amount=Number(amount)
                        }
                        mode=payment()
                        alert(`Purchase for Sh${amount} worth of MBs through ${mode} Successfull \n Safaricom.Twaweza`)
                   }
                   else if(offer=="2"){
                    let data=window.prompt("Enter Data in (MBs)that you use daily(10MBs-850000MBs")
                    data=Number(data)
                    while(isNaN(data) || data<10 || data>8500000){
                        data=window.prompt("Invalid choice \n Enter Data in (MBs)that you use daily(10MBs-850000MBs")
                    }
                    mode=payment()
                    alert(`Purchase for ${data} Mbs through ${mode} Successfull \n Safaricom.Twaweza`)
                   }
                   else{
                        Data_Deals()
                   }
                }
            case "7":
                Gift_a_Friend()
                break;
                
            case "8":
                return Unlock_baze_bonus()
                function Unlock_baze_bonus(){
                    let offer=window.prompt("Buy Baze pass @ Ksh 10 and enjoy 3 Days Free with 500 Mb Daily Used for baze video only . \n Confirm one off Purchase @ 10 Ksh \n 1:Airtime \n 2: Back")
                    while(offer !=="1" && offer!=="2"){
                        offer=window.prompt("Invalid choice \nBuy Baze pass @ Ksh 10 and enjoy 3 Days Free with 500 Mb Daily Used for baze video only . \n Confirm one off Purchase @ 10 Ksh \n 1:Airtime \n 2: Back")
                    }
                    let choice;
                    switch(offer){
                        case "1":
                            choice="Baze data pass"
                            break;
                        case "2":
                            Data_Deals()
                    }
                    if(offer && choice){
                        alert(`Purchase of ${choice} @ Sh 10 of airtime Successfull .\n Safaricom .Twaweza`)
                    }
                }
            case "9":
                return Nyakua_bonus()
                function Nyakua_bonus(){
                    let nyakua_choice=window.prompt("Nyakua bonus \n 1:Check My Target \n 2:Check my daily Usage \n 3: Check My Free Data Balance \n 4: Join Data Bonus \n 5:Opt out/Unsubscribe \n 6: How it Works(FAQs) \n 0:Back \n 00:HOME ")
                    while(nyakua_choice !=="1" && nyakua_choice !=="2" && nyakua_choice !=="3" && nyakua_choice !=="4" && nyakua_choice !=="6" && nyakua_choice !=="7" && nyakua_choice !=="8" && nyakua_choice !=="0" && nyakua_choice !=="00"){
                        choice=window.prompt("Invalid choice \n Nyakua bonus \n 1:Check My Target \n 2:Check my daily Usage \n 3: Check My Free Data Balance \n 4: Join Data Bonus \n 5:Opt out/Unsubscribe \n 6: How it Works(FAQs) \n 0:Back \n 00:HOME ")
                    }
                    
                    if(nyakua_choice !=="0" && nyakua_choice !=="00"){
                        alert("Service currently not Available")
                    }
                    else if(nyakua_choice=="00"){
                        M_Choice();
                    }
                    
                    else{
                        Data_Deals()
                    }
                 
                }
            case "0":
                M_Choice();
                break;

        }
    }

        function Daily() {
            let offer = window.prompt("0:Data Plus \n 1:Sh 99=1GB \n 2:Sh 99=750 MB +500 SMS+Whatsapp \n 3:SH 50=300 MB+150 SMS+Whatsapp\n 4:Sh 20=100 MB +50 SMS+Whatsapp \n 5:Sh 10=35MB +15 SMS+Whatsapp \n 6:Sh 5=10 MB +7 SMS \n 7:Buy for others");
        
            while (offer !== "0" && offer !== "1" && offer !== "2" && offer !== "3" && offer !== "4" && offer !== "5" && offer !== "6" && offer !== "7") {
                offer = window.prompt("Invalid option \n 0:Data Plus \n 1:Sh 99=1GB \n 2:Sh 99=750 MB +500 SMS+Whatsapp \n 3:SH 50=300 MB+150 SMS+Whatsapp\n 4:Sh 20=100 MB +50 SMS+Whatsapp \n 5:Sh 10=35MB +15 SMS+Whatsapp \n 6:Sh 5=10 MB +7 SMS \n 7:Buy for others");
            }
        
            if (offer === "7") {
                let number = window.prompt("Enter number");
                while (number.length !== 10 || isNaN(number)) {
                    number = window.prompt("Invalid number. Enter a valid 10-digit number");
                }
                let amount = window.prompt("Enter amount (Sh.5 and above)");
                while (amount < 5 || isNaN(amount)) {
                    amount = window.prompt("Amount must be Sh.5 and above. Enter amount");
                }
                mode=payment(); 
                alert(`Successfully purchased Sh.${amount} airtime for ${number} using ${mode}. Safaricom Twaweza`);
            } 
            else if (offer !== "0") {
                
                let mode = payment();
                alert(`Successfully purchased offer ${offer} using ${mode}. Safaricom Twaweza.`);
            } 
            else {
                D_P_1()
            }
        }
        
    
    function Weekly(){
        let offer=window.prompt("1:Sh 999=10 GB+Free 500 MB You Tube \n 2:Sh 500=3.5GB+Free 500MB You Tube \n 3:Sh 250=1.5GB \n 4:Sh 99=500MB \n 5:Sh 50=200MB \n 6:Buy for another number \n 0:BACK \n 00:HOME")
        while(offer!=="1" && offer!=="2" && offer!=="3" && offer!=="4" && offer!=="5" && offer!=="6" && offer!=="0" &&offer!=="00"){
            offer=window.prompt("Invalid choice \n 1:Sh 999=10 GB+Free 500 MB You Tube \n 2:Sh 500=3.5GB+Free 500MB You Tube \n 3:Sh 250=1.5GB \n 4:Sh 99=500MB \n 5:Sh 50=200MB \n 6:Buy for another number \n 0:BACK \n 00:HOME")

        }
        let choice;
        switch(offer){
            case "1":
                choice="Sh 999=10 GB+Free 500 MB You Tube"
                break;
            case "2":
                choice="Sh 500=3.5GB+Free 500MB You Tube "
                break;
            case "3":
                choice="Sh 250=1.5G"
                break;
            case "4":
                choice="Sh 99=500MB"
                break;
            case "5":
                choice="Sh 50=200MB"
                break;

        }
        if(offer!=="6" && offer!=="0" && offer!=="00"){
            let mode=payment()
            alert(`Purchase of ${choice} through ${mode} successfull`)
        }
        
        else if(offer=="6"){
            let number=another()
       
            let amount=window.prompt("Enter amount you wish to spend")
            amount=Number(amount)
            while(isNaN(amount) || amount<10){
                amount=window.prompt("Invalid \n Amount must be above Sh 10 \n Enter amount you wish to spend")
            }
            
            if(amount){
                let mode=payment()
                alert(`Purchase of Sh ${amount} worth of aitime for ${number} through ${mode} Successfull \n Safaricom . Twaweza`)
            }
        }
        else if(offer=="0"){
            M_Choice()
        }
        else{
            M_Choice();
        }
    }
    function Go_Monthly(){
        let choice=window.prompt("0:Sh 1000=8GB+400 mins +1000 sms \n 1: All in one \n 2:Data deals \n 3: HOT DEALS \n 4: Chagua bei yako \n 5: 5G plans \n 6: Buy for another \n 7:HOME")
        while(choice !=="0" && choice !=="1" && choice !=="2" && choice !=="3" && choice !=="4" && choice !=="5" && choice !=="6" && choice !=="7"){
            choice=window.prompt("Invalid Choice \n 0:Sh 1000=8GB+400 mins +1000 sms \n 1: All in one \n 2:Data deals \n 3: HOT DEALS \n 4: Chagua bei yako \n 5: 5G plans \n 6: Buy for another \n 7:HOME")
        }
        let offer;
        switch(choice){
            case "1":
                offer="0:Sh 1000=8GB+400 mins +1000 sms "
                break;
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                another();
                amount();
                break;
            case "7":
                M_Choice();
                break;
        }
    }
   
    function Okoa_Data(){
        let choice=window.prompt("Okoa Bundles \n 0:Okoa bei yako \n 1:Sh20=900 Mb 1hr \n 2:Sh 50=270 Mb 24 hours \n 3:Sh 20=90 Mb ,24hrs \n 4:Sh 10=30 Mb 24 hours \n 5:Sh5=10 mb ,24hr")
        let offer;
        switch(choice){
            case "1":
                offer="Sh20=900 Mb 1hr"
                break;
            case "2":
                offer="Sh 50=270 Mb 24 hours"
                break;
            case "3":
                offer="Sh 20=90 Mb ,24hrs"
                break;
            case "4":
                offer="Sh 10=30 Mb 24 hours"
            case "5":
                offer="Sh5=10 mb ,24h"
                break;

        }
        while(choice !=="0" && choice !=="1" && choice !=="2" && choice !=="3" && choice !=="4" && choice !=="5" && choice !=="6"){
            choice=window.prompt("Invalid option \n Okoa Bundles \n 0:Okoa bei yako \n 1:Sh20=900 Mb 1hr \n 2:Sh 50=270 Mb 24 hours \n 3:Sh 20=90 Mb ,24hrs \n 4:Sh 10=30 Mb 24 hours \n 5:Sh5=10 mb ,24hr")

        }
        if(choice!=="0"){
            if(choice && offer){
                alert(`Purchase of ${offer} through Okoa Successfull \n Safaricom . Twaweza`)
            }
        }
        else{
            let a=amount();
            alert(`Okoa of ${a} Successfull \n Safaricom. Twaweza`)

        }
    }
    function No_Expiry(){
        let choice=window.prompt("1:Buy for my number \n 2:Buy for another number \n 3:Okoa Data \n 4:Stop Auto-renew \n 5:Stop Auto-refill \n 0:Back\n 00:HOME")
        while(choice!=="0"&& choice!=="00" && choice!=="1"&& choice!=="2"&& choice!=="3"&& choice!=="4"&& choice!=="5"){
            choice=window.prompt("Invalid choice \n 1:Buy for my number \n 2:Buy for another number \n 3:Okoa Data \n 4:Stop Auto-renew \n 5:Stop Auto-refill \n 0:Back\n 00:HOME")

        }
        if(choice=="1"){
            let a=amount()
            let b=payment()
            alert(`Purchase of sh${a} worth of airtime through ${b} Successfull`)
        }
        else if(choice=="2"){
            let a=another()
            let b=amount()
            let c=payment()
            alert(`You have successfully bought sh${b} worth of airtime for ${a} using ${c} \n Safaricom. Twaweza `)
        }
        else if(choice=="3"){
            Okoa_Data();
        }
        else if(choice=="4" || choice=="5"){
            alert("You do not have active Subscriptions")

        }
        else if(choice=="0"){
            M_Choice()
        }
        else{
            M_Choice()
        }
    }
    function Videos(){
        let choice=window.prompt("0:Sh 450=EPL live access +3 GB \n 1:You Tube \n 2: Tik Tok \n 3: Show MAx \n 4:Base Video \n 5:Spotify \n 6:Boomplay \n 7:Staritimes \n 8:VIUSASA")
        while(choice!=="0" && choice!=="1" && choice!=="2" && choice!=="3" && choice!=="4" && choice!=="5" && choice!=="6" && choice!=="7" && choice!=="8" && choice!=="9"){
            choice=window.prompt("Invalid Option \n 0:Sh 450=EPL live access +3 GB \n 1:You Tube \n 2: Tik Tok \n 3: Show MAx \n 4:Base Video \n 5:Spotify \n 6:Boomplay \n 7:Staritimes \n 8:VIUSASA")
        }
        let offer;
        switch(choice){
            case "0":
                let mode=payment()
                offer="Sh 450=EPL live access +3 GB "
                alert(`Purchase of ${offer} through ${mode} Successful`)
                break;
            case "1":
                alert("Enjoy best videos on YOU TUBE")
                offer=T_Y();
                break;
                
            case "2":
                alert("Enjoy trending content on Tik Tok")
                offer=T_Y()
                break;
            case "3":
                M_showmax()
                break;
            case "4":
                return Base_Video()
                function Base_Video(){
                    let choice=window.prompt("Enjoy your favorite show on Baze videos \n 1:Sh20=Daily pass+200 Mb auto \n 2: Sh20=Daily Pass+200 Mb one-off \n 3: Sh 10=Daily pass auto \n 4: Sh 10=Daily pass one-off \n 5:Unsubscribe \n 0:BACK")
                    while(choice !=="0" && choice !=="1" && choice !=="2" && choice !=="3" && choice !=="4" && choice !=="5"){
                        choice=window.prompt("Invalid choice \n Enjoy your favorite show on Baze videos \n 1:Sh20=Daily pass+200 Mb auto \n 2: Sh20=Daily Pass+200 Mb one-off \n 3: Sh 10=Daily pass auto \n 4: Sh 10=Daily pass one-off \n 5:Unsubscribe \n 0:BACK")

                    }
                    switch(choice){
                        case "0":
                            M_Choice()
                            break;
                        case "1":
                            offer="Sh20=Daily pass+200 Mb auto";
                            break;
                        case "2":
                            offer="Sh20=Daily Pass+200 Mb one-off"
                            break;
                        case "3":
                            offer="Sh 10=Daily pass auto"
                            break;
                        case "4":
                            offer="Sh 10=Daily pass one-off"
                            break;
                        case "5":
                            alert("You are not Subscribed")
                            break;
                    }
                    if(choice!=="0" && choice!=="5"){
                        let mode=payment()
                        alert(`Purchase of ${offer} through ${mode} successfull \n Safaricom Twaweza`)
                    }
                }
            case "5":
                return Spotify()
                function Spotify(){
                    let choice=window.prompt("Free Spotify Trial For 7 Days(No Data) \n 1:Proceed \n 2:Back")
                    while(choice!=="1" && choice !=="0"){
                        choice=window.prompt("Invalid choice \n Free Spotify Trial For 7 Days(No Data) \n 1:Proceed \n 2:Back")
                    }
                    if(choice=="1"){
                        alert("You have successfully subscribed to a free Spotify trial for 7 days. \n Click the link sent to your sms to listen to your favourite music")
                    }
                    else{
                        M_Choice()
                    }
                }
            case "6":
                return Boomplay()
                function Boomplay(){
                    let choice=window.prompt("Welcome to Boomplay \n 1: Buy a Subscription \n 2: About Boomplay \n 3: Unsubscribe \n 0:BACK")
                    while(choice!=="0" && choice!=="1" && choice!=="2" && choice!=="3"){
                        choice=window.prompt("Invalid choice \n Welcome to Boomplay \n 1: Buy a Subscription \n 2: About Boomplay \n 3: Unsubscribe \n 0:BACK")

                    }
                    switch(choice){
                        case "1":
                            let offer=window.prompt("Select your subscription \n 1:Daily plan with 50 MB @ sh20 \n 2: Weekly plan with 300MB @ sh 120 \n 3:Monthly plan with 1.5 GB @ sh 299")
                            while(offer !=="1" && offer !=="2" && offer !=="3"){
                                offer=window.prompt("Invalid offer \n Select your subscription \n 1:Daily plan with 50 MB @ sh20 \n 2: Weekly plan with 300MB @ sh 120 \n 3:Monthly plan with 1.5 GB @ sh 299")

                            }
                            let w_offer;
                            switch(offer){
                                case "1":
                                    w_offer="Daily plan with 50 MB @ sh20 "
                                    break;
                                case "2":
                                    w_offer="Weekly plan with 300MB @ sh 120";
                                    break;
                                case "3":
                                    w_offer="Monthly plan with 1.5 GB @ sh 299"
                                    break;
                            }
                            if(offer){
                                let mode=payment()
                                alert(`Purchase of ${w_offer} through ${mode} successfull`)
                            }
                        break;
                        case "2":
                            alert("You will receive an sms shortly")
                            break;
                        case "3":
                            alert("You are not subscribed")
                            break;
                    }
                }
            case "7":
                return Startimes()
                function Startimes(){
                    let choice=window.prompt("Select your startimes subscription \n 1:Sh 50=Daily access+1GB \n 2:Sh 199=Weekly access+1.5Gb \n 3:Sh 299=Mothly access +2 GB \n 0:BACK")
                    while(choice!=="0" && choice!=="1" && choice!=="2" && choice!=="3"){
                        choice=window.prompt("Invalid choice \n Select your startimes subscription \n 1:Sh 50=Daily access+1GB \n 2:Sh 199=Weekly access+1.5Gb \n 3:Sh 299=Mothly access +2 GB \n 0:BACK")

                    }
                    let offer;
                    let mode=payment()
                    switch(choice){
                        case "1":
                            offer="Sh 50=Daily access+1GB"
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "2":
                            offer="Sh 199=Weekly access+1.5Gb "
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "3":
                            offer="Sh 299=Mothly access +2 GB"
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "0":
                            M_Choice()
                            break;
                    }
                }
            case "8":
                return VIUSASA()
                function VIUSASA(){
                    let choice=window.prompt("Enjoy your favorite shows on Viusasa \n 1:All day data pass autorenew+200Mb=Sh 20 \n 2:All day data pass one off+200Mb=Sh 20 \n 3: All day data pass one off=Sh 20 \n 4:Unsubscribe \n 0:BACK")
                    while(choice!=="0"&& choice!=="1"&& choice!=="2"&& choice!=="3"&& choice!=="4"){
                        choice=window.prompt("Invalid choice \n Enjoy your favorite shows on Viusasa \n 1:All day data pass autorenew+200Mb=Sh 20 \n 2:All day data pass one off+200Mb=Sh 20 \n 3: All day data pass one off=Sh 20 \n 4:Unsubscribe \n 0:BACK")

                    }
                    let offer;
                    let mode=payment()
                    switch(choice){
                        case "0":
                            M_Choice()
                            break;
                        case "1":
                            offer="All day data pass autorenew+200Mb=Sh 20"
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "2":
                            offer="All day data pass one off+200Mb=Sh 20"
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "3":
                            offer="All day data pass one off=Sh 20"
                            alert(`Purchase of ${offer} through ${mode} successfull`)
                            break;
                        case "4":
                            alert("You are not subscribed")

                    }
                }
            
        }
    }
    function Lipa_Mdogo(){
        let offer=window.prompt("0:opt in \n 1:Buy for another \n 2:Check for terms & conditions \n 3:More about lipa mdogo mdogo \n 0:BACK")
        while(offer!=="0" && offer!=="1" && offer!=="2" && offer!=="3"){
            offer=window.prompt("Invalid choice \n 0:opt in \n 1:Buy for another \n 2:Check for terms & conditions \n 3:More about lipa mdogo mdogo \n 0:BACK")
        }
        if(offer=="1"){
            another()
            
        }
        else{
            alert("Service currently not available")
        }
        
    }

    function MORE(){
        let choice=window.prompt("16:Sambaza \n 17 : Data roaming \n 18: Balance and tips \n 19: Buy Newsapaper \n 20: Is my SIM 4G Enabled? \n 21:Home Internet \n 0:back")
        while(choice!=="0"&& choice!=="16"&& choice!=="17"&& choice!=="18"&& choice!=="19"&& choice!=="10"&& choice!=="21"){
            choice=window.prompt("Invalid choice \n 16:Sambaza \n 17 : Data roaming \n 18: Balance and tips \n 19: Buy Newsapaper \n 20: Is my SIM 4G Enabled? \n 21:Home Internet \n 0:back")

        }
        if(choice=="16"){
            let a=another()
            let b=amount()
            let c=payment()
            alert(`Purchase of ${b} worth of airtime for ${a} through ${c} Successfull`)
        }
        else if(choice=="0"){
            M_Choice()
        }
        else{
            alert("Service currently unavailable")
        }
    }

})