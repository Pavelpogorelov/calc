jQuery(function(){var ServicePnevm1=0,RentDay1=0,MaterialValue1=0,DeliverysValue1=0,delivery=1000,PriceMaterial1=0,TabStaz1=1,Sstaz1=1,floors1=0,CostMaterial1=0,CostWork1=0,Costfloors1=0,SelfPrices1=0,ClientPrices1=0,pesoks1=1,cement=285,fibro=260,plasti=3000,demlenta=8,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130;function recount(){if(Sstaz1<=250){ServicePnevm1=10000}else if(Sstaz1<=1500){ServicePnevm1=8000}else if(Sstaz1<=5000){ServicePnevm1=6000}else if(Sstaz1>5000){ServicePnevm1=5000}delivery=1000;MaterialValue1=(TabStaz1/1000)*Sstaz1;MaterialValue1=roundTo5(MaterialValue1);if((MaterialValue1/15)<1){RentDay1=1}else if((MaterialValue1/15)>=1){RentDay1=roundTo1(MaterialValue1/15)}if(MaterialValue1=>25){pesoks1=1100}if(MaterialValue1<20){pesoks1=1200}if(MaterialValue1<15){pesoks1=1300}if(MaterialValue1<10){pesoks1=1315}if(MaterialValue1<9.5){pesoks1=1389}if(MaterialValue1<9){pesoks1=1411.76}if(MaterialValue1<8.5){pesoks1=1437.5}if(MaterialValue1<8){pesoks1=1467}if(MaterialValue1<7.5){pesoks1=1500}if(MaterialValue1<7){pesoks1=1538}if(MaterialValue1<6.5){pesoks1=1583}if(MaterialValue1<6){pesoks1=1636.36}if(MaterialValue1<5.5){pesoks1=1700}if(MaterialValue1<5){pesoks1=1778}if(MaterialValue1<4.5){pesoks1=1875}if(MaterialValue1<4){pesoks1=2000}if(MaterialValue1<3.5){pesoks1=2100}DeliverysValue1=String(MaterialValue1*5/50).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial1=(MaterialValue1*pesoks1+MaterialValue1*5*cement+MaterialValue1*1.5*fibro+MaterialValue1*plasti*0.35+demlenta*Sstaz1*1.5)/MaterialValue1;PriceMaterial1=+PriceMaterial1.toFixed(2);CostMaterial1=roundTo05(PriceMaterial1*MaterialValue1);CostMaterial1=+CostMaterial1.toFixed(2);if(TabStaz1<=70&&Sstaz1<=70){CostWork1=Sstaz1*pricework1}else if(TabStaz1<=70&&Sstaz1<=150){CostWork1=Sstaz1*pricework4}else if(TabStaz1<=70&&Sstaz1<=220){CostWork1=Sstaz1*pricework7}else if(TabStaz1<=70&&Sstaz1>220){CostWork1=Sstaz1*pricework10}if(TabStaz1>100&&Sstaz1<=70){CostWork1=Sstaz1*pricework3}else if(TabStaz1>100&&Sstaz1<=150){CostWork1=Sstaz1*pricework6}else if(TabStaz1>100&&Sstaz1<=220){CostWork1=Sstaz1*pricework9}else if(TabStaz1>100&&Sstaz1>220){CostWork1=Sstaz1*pricework12}if(TabStaz1>70&&Sstaz1<=70){CostWork1=(Sstaz1*pricework2)}else if(TabStaz1>70&&Sstaz1<=150){CostWork1=(Sstaz1*pricework5)}else if(TabStaz1>70&&Sstaz1<=220){CostWork1=(Sstaz1*pricework8)}else if(TabStaz1>70&&Sstaz1>220){CostWork1=(Sstaz1*pricework11)}if(floors1<=3){Costfloors1=0}else if(floors1>3){Costfloors1=((floors1-3)*200)}SelfPrices1=CostMaterial1+CostWork1+ServicePnevm1*RentDay1+DeliverysValue1*delivery;if(TabStaz1<50){ClientPrices1='Минимальная толщина стяжки 50мм'}else if(TabStaz1=>50){ClientPrices1=roundTo100(CostWork1*2+CostMaterial1*1.4+Costfloors1+ServicePnevm1*RentDay1+delivery*DeliverysValue1);ClientPrices1=+ClientPrices1.toFixed()}jQuery("#ServicePnevm1 span").html(ServicePnevm1+' руб.');jQuery("#RentDay1 span").html(RentDay1+' руб.');jQuery("#MaterialValue1 span").html(MaterialValue1+' руб.');jQuery("#DeliverysValue1 span").html(DeliverysValue1+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial1 span").html(PriceMaterial1+' руб.');jQuery("#CostMaterial1 span").html(CostMaterial1+' руб.');jQuery("#CostWork1 span").html(CostWork1+' руб.');jQuery("#Costfloors1 span").html(Costfloors1+' руб.');jQuery("#SelfPrices1 span").html(SelfPrices1+' руб.');jQuery("#ClientPrices1 span").html(ClientPrices1+' руб.');jQuery("#pesoks1 span").html(pesoks1+' руб.');document.getElementById('ClientPrices1').value=ClientPrices1};$(document).on("input","#Sstaz1",function(){Sstaz1=+$(this).val();$("#Sstaz1").slider("value",Sstaz1);recount()});$(document).on("input","#TabStaz1",function(){TabStaz1=+$(this).val();$("#TabStaz1").slider("value",TabStaz1);recount()});$(document).on("input","#floors1",function(){floors1=+$(this).val();$("#floors1").slider("value",floors1);recount()})});$(function(){$("#Sstaz1").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz1').val(ui.value).trigger("input")}});$("#Sstaz1").val($("#Sstaz1").slider("value"))});$(function(){$("#TabStaz1").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz1").val(ui.value).trigger("input")}});$("#TabStaz1").val($("#TabStaz1").slider("value"))});$(function(){$("#floors1").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors1").val(ui.value).trigger("input")}});$("#floors1").val($("#floors1").slider("value"))});jQuery(function(){var ServicePnevm2=0,RentDay2=0,MaterialValue2=0,DeliverysValue2=0,delivery=1000,PriceMaterial2=0,TabStaz2=1,Sstaz2=1,floors2=0,CostMaterial2=0,CostWork2=0,Costfloors2=0,SelfPrices2=0,ClientPrices2=0,pesoks2=1,cement=285,fibro=260,plenka=16,demlenta=8,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130;function recount(){if(Sstaz2<=250){ServicePnevm2=10000}else if(Sstaz2<=1500){ServicePnevm2=8000}else if(Sstaz2<=5000){ServicePnevm2=6000}else if(Sstaz2>5000){ServicePnevm2=5000}delivery=1000;MaterialValue2=(TabStaz2/1000)*Sstaz2;MaterialValue2=roundTo5(MaterialValue2);if((MaterialValue2/15)<1){RentDay2=1}else if((MaterialValue2/15)>=1){RentDay2=roundTo1(MaterialValue2/15)}if(MaterialValue2=>25){pesoks2=1100}if(MaterialValue2<20){pesoks2=1200}if(MaterialValue2<15){pesoks2=1300}if(MaterialValue2<10){pesoks2=1315}if(MaterialValue2<9.5){pesoks2=1389}if(MaterialValue2<9){pesoks2=1411.76}if(MaterialValue2<8.5){pesoks2=1437.5}if(MaterialValue2<8){pesoks2=1467}if(MaterialValue2<7.5){pesoks2=1500}if(MaterialValue2<7){pesoks2=1538}if(MaterialValue2<6.5){pesoks2=1583}if(MaterialValue2<6){pesoks2=1636.36}if(MaterialValue2<5.5){pesoks2=1700}if(MaterialValue2<5){pesoks2=1778}if(MaterialValue2<4.5){pesoks2=1875}if(MaterialValue2<4){pesoks2=2000}if(MaterialValue2<3.5){pesoks2=2100}DeliverysValue2=String(MaterialValue2*5/50).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial2=(MaterialValue2*pesoks2+MaterialValue2*5*cement+MaterialValue2*1.5*fibro+Sstaz2*plenka*1.1+demlenta*Sstaz2*1.5)/MaterialValue2;PriceMaterial2=+PriceMaterial2.toFixed(2);CostMaterial2=roundTo05(PriceMaterial2*MaterialValue2);CostMaterial2=+CostMaterial2.toFixed(2);if(TabStaz2<=70&&Sstaz2<=70){CostWork2=Sstaz2*pricework1}else if(TabStaz2<=70&&Sstaz2<=150){CostWork2=Sstaz2*pricework4}else if(TabStaz2<=70&&Sstaz2<=220){CostWork2=Sstaz2*pricework7}else if(TabStaz2<=70&&Sstaz2>220){CostWork2=Sstaz2*pricework10}if(TabStaz2>100&&Sstaz2<=70){CostWork2=Sstaz2*pricework3}else if(TabStaz2>100&&Sstaz2<=150){CostWork2=Sstaz2*pricework6}else if(TabStaz2>100&&Sstaz2<=220){CostWork2=Sstaz2*pricework9}else if(TabStaz2>100&&Sstaz2>220){CostWork2=Sstaz2*pricework12}if(TabStaz2>70&&Sstaz2<=70){CostWork2=(Sstaz2*pricework2)}else if(TabStaz2>70&&Sstaz2<=150){CostWork2=(Sstaz2*pricework5)}else if(TabStaz2>70&&Sstaz2<=220){CostWork2=(Sstaz2*pricework8)}else if(TabStaz2>70&&Sstaz2>220){CostWork2=(Sstaz2*pricework11)}if(floors2<=3){Costfloors2=0}else if(floors2>3){Costfloors2=((floors2-3)*200)}SelfPrices2=CostMaterial2+CostWork2+ServicePnevm2*RentDay2+DeliverysValue2*delivery;ClientPrices2=roundTo100(CostWork2*2+CostMaterial2*1.4+Costfloors2+ServicePnevm2*RentDay2+delivery*DeliverysValue2);ClientPrices2=+ClientPrices2.toFixed();jQuery("#ServicePnevm2 span").html(ServicePnevm2+' руб.');jQuery("#RentDay2 span").html(RentDay2+' руб.');jQuery("#MaterialValue2 span").html(MaterialValue2+' руб.');jQuery("#DeliverysValue2 span").html(DeliverysValue2+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial2 span").html(PriceMaterial2+' руб.');jQuery("#CostMaterial2 span").html(CostMaterial2+' руб.');jQuery("#CostWork2 span").html(CostWork2+' руб.');jQuery("#Costfloors2 span").html(Costfloors2+' руб.');jQuery("#SelfPrices2 span").html(SelfPrices2+' руб.');jQuery("#ClientPrices2 span").html(ClientPrices2+' руб.');jQuery("#pesoks2 span").html(pesoks2+' руб.')};$(document).on("input","#Sstaz2",function(){Sstaz2=+$(this).val();$("#Sstaz2").slider("value",Sstaz2);recount()});$(document).on("input","#TabStaz2",function(){TabStaz2=+$(this).val();$("#TabStaz2").slider("value",TabStaz2);recount()});$(document).on("input","#floors2",function(){floors2=+$(this).val();$("#floors2").slider("value",floors2);recount()})});$(function(){$("#Sstaz2").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz2').val(ui.value).trigger("input")}});$("#Sstaz2").val($("#Sstaz2").slider("value"))});$(function(){$("#TabStaz2").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz2").val(ui.value).trigger("input")}});$("#TabStaz2").val($("#TabStaz2").slider("value"))});$(function(){$("#floors2").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors2").val(ui.value).trigger("input")}});$("#floors2").val($("#floors2").slider("value"))});jQuery(function(){var ServicePnevm3=0,RentDay3=0,MaterialValue3=0,DeliverysValue3=0,delivery=1000,PriceMaterial3=0,TabStaz3=1,Sstaz3=1,floors3=0,CostMaterial3=0,CostWork3=0,Costfloors3=0,SelfPrices3=0,ClientPrices3=0,pesoks3=1,cement=285,fibro=260,plenka=16,demlenta=8,setkaarm=65,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130,armsetkaworkss3=0;function recount(){if(Sstaz3<=250){ServicePnevm3=10000}else if(Sstaz3<=1500){ServicePnevm3=8000}else if(Sstaz3<=5000){ServicePnevm3=6000}else if(Sstaz3>5000){ServicePnevm3=5000}delivery=1000;MaterialValue3=(TabStaz3/1000)*Sstaz3;MaterialValue3=roundTo5(MaterialValue3);if((MaterialValue3/15)<1){RentDay3=1}else if((MaterialValue3/15)>=1){RentDay3=roundTo1(MaterialValue3/15)}if(MaterialValue3=>25){pesoks3=1100}if(MaterialValue3<20){pesoks3=1200}if(MaterialValue3<15){pesoks3=1300}if(MaterialValue3<10){pesoks3=1315}if(MaterialValue3<9.5){pesoks3=1389}if(MaterialValue3<9){pesoks3=1411.76}if(MaterialValue3<8.5){pesoks3=1437.5}if(MaterialValue3<8){pesoks3=1467}if(MaterialValue3<7.5){pesoks3=1500}if(MaterialValue3<7){pesoks3=1538}if(MaterialValue3<6.5){pesoks3=1583}if(MaterialValue3<6){pesoks3=1636.36}if(MaterialValue3<5.5){pesoks3=1700}if(MaterialValue3<5){pesoks3=1778}if(MaterialValue3<4.5){pesoks3=1875}if(MaterialValue3<4){pesoks3=2000}if(MaterialValue3<3.5){pesoks3=2100}if(Sstaz3<70){armsetkaworkss3=70}else if(Sstaz3<150){armsetkaworkss3=60}else if(Sstaz3<220){armsetkaworkss3=50}else if(Sstaz3<500){armsetkaworkss3=40}else if(Sstaz3<2000){armsetkaworkss3=30}else if(Sstaz3=>2000){armsetkaworkss3=20}DeliverysValue3=String(MaterialValue3*5/50).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial3=(MaterialValue3*pesoks3+MaterialValue3*5*cement+MaterialValue3*1.5*fibro+Sstaz3*plenka*1.1+demlenta*Sstaz3*1.5)/MaterialValue3;PriceMaterial3=+PriceMaterial3.toFixed(2);CostMaterial3=roundTo05(PriceMaterial3*MaterialValue3+setkaarm*Sstaz3*1.1);CostMaterial3=+CostMaterial3.toFixed(2);if(TabStaz3<=70&&Sstaz3<=70){CostWork3=((Sstaz3*pricework1)+(armsetkaworkss3*Sstaz3))}else if(TabStaz3<=70&&Sstaz3<=150){CostWork3=((Sstaz3*pricework4)+(armsetkaworkss3*Sstaz3))}else if(TabStaz3<=70&&Sstaz3<=220){CostWork3=((Sstaz3*pricework7)+(armsetkaworkss3*Sstaz3))}else if(TabStaz3<=70&&Sstaz3>220){CostWork3=((Sstaz3*pricework10)+(armsetkaworkss3*Sstaz3))}if(TabStaz3>100&&Sstaz3<=70){CostWork3=((Sstaz3*pricework3)+(armsetkaworkss3*Sstaz3))}else if(TabStaz3>100&&Sstaz3<=150){CostWork3=((Sstaz3*pricework6)+(armsetkaworkss3*Sstaz3))}else if(TabStaz3>100&&Sstaz3<=220){CostWork3=(Sstaz3*pricework9)+armsetkaworkss3*Sstaz3}else if(TabStaz3>100&&Sstaz3>220){CostWork3=(Sstaz3*pricework12)+armsetkaworkss3*Sstaz3}if(TabStaz3>70&&Sstaz3<=70){CostWork3=(Sstaz3*pricework2)+armsetkaworkss3*Sstaz3}else if(TabStaz3>70&&Sstaz3<=150){CostWork3=(Sstaz3*pricework5)+armsetkaworkss3*Sstaz3}else if(TabStaz3>70&&Sstaz3<=220){CostWork3=(Sstaz3*pricework8)+armsetkaworkss3*Sstaz3}else if(TabStaz3>70&&Sstaz3>220){CostWork3=(Sstaz3*pricework11)+armsetkaworkss3*Sstaz3}if(floors3<=3){Costfloors3=0}else if(floors3>3){Costfloors3=((floors3-3)*200)}SelfPrices3=CostMaterial3+CostWork3+ServicePnevm3*RentDay3+DeliverysValue3*delivery;ClientPrices3=roundTo100(CostWork3*2+CostMaterial3*1.4+Costfloors3+ServicePnevm3*RentDay3+delivery*DeliverysValue3);ClientPrices3=+ClientPrices3.toFixed();jQuery("#ServicePnevm3 span").html(ServicePnevm3+' руб.');jQuery("#RentDay3 span").html(RentDay3+' руб.');jQuery("#MaterialValue3 span").html(MaterialValue3+' руб.');jQuery("#DeliverysValue3 span").html(DeliverysValue3+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial3 span").html(PriceMaterial3+' руб.');jQuery("#CostMaterial3 span").html(CostMaterial3+' руб.');jQuery("#CostWork3 span").html(CostWork3+' руб.');jQuery("#Costfloors3 span").html(Costfloors3+' руб.');jQuery("#SelfPrices3 span").html(SelfPrices3+' руб.');jQuery("#ClientPrices3 span").html(ClientPrices3+' руб.');jQuery("#pesoks3 span").html(pesoks3+' руб.');jQuery("#armsetkaworkss3 span").html(armsetkaworkss3+' руб.')};$(document).on("input","#Sstaz3",function(){Sstaz3=+$(this).val();$("#Sstaz3").slider("value",Sstaz3);recount()});$(document).on("input","#TabStaz3",function(){TabStaz3=+$(this).val();$("#TabStaz3").slider("value",TabStaz3);recount()});$(document).on("input","#floors3",function(){floors3=+$(this).val();$("#floors3").slider("value",floors3);recount()})});$(function(){$("#Sstaz3").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz3').val(ui.value).trigger("input")}});$("#Sstaz3").val($("#Sstaz3").slider("value"))});$(function(){$("#TabStaz3").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz3").val(ui.value).trigger("input")}});$("#TabStaz3").val($("#TabStaz3").slider("value"))});$(function(){$("#floors3").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors3").val(ui.value).trigger("input")}});$("#floors3").val($("#floors3").slider("value"))});jQuery(function(){var ServicePnevm4=0,RentDay4=0,MaterialValue4=0,DeliverysValue4=0,delivery=1000,PriceMaterial4=0,TabStaz4=1,Sstaz4=1,floors4=0,CostMaterial4=0,CostWork4=0,Costfloors4=0,SelfPrices4=0,ClientPrices4=0,pesoks4=1,cement=285,fibro=260,plenka=16,demlenta=8,setkaarm=65,penopleks=110,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130,armsetkaworkss4=0,teplozvukwork4=0;function recount(){if(Sstaz4<=250){ServicePnevm4=10000}else if(Sstaz4<=1500){ServicePnevm4=8000}else if(Sstaz4<=5000){ServicePnevm4=6000}else if(Sstaz4>5000){ServicePnevm4=5000}delivery=1000;MaterialValue4=(TabStaz4/1000)*Sstaz4;MaterialValue4=roundTo5(MaterialValue4);if((MaterialValue4/15)<1){RentDay4=1}else if((MaterialValue4/15)>=1){RentDay4=roundTo1(MaterialValue4/15)}if(MaterialValue4=>25){pesoks4=1100}if(MaterialValue4<20){pesoks4=1200}if(MaterialValue4<15){pesoks4=1300}if(MaterialValue4<10){pesoks4=1315}if(MaterialValue4<9.5){pesoks4=1389}if(MaterialValue4<9){pesoks4=1411.76}if(MaterialValue4<8.5){pesoks4=1437.5}if(MaterialValue4<8){pesoks4=1467}if(MaterialValue4<7.5){pesoks4=1500}if(MaterialValue4<7){pesoks4=1538}if(MaterialValue4<6.5){pesoks4=1583}if(MaterialValue4<6){pesoks4=1636.36}if(MaterialValue4<5.5){pesoks4=1700}if(MaterialValue4<5){pesoks4=1778}if(MaterialValue4<4.5){pesoks4=1875}if(MaterialValue4<4){pesoks4=2000}if(MaterialValue4<3.5){pesoks4=2100}if(Sstaz4<70){armsetkaworkss4=70}else if(Sstaz4<150){armsetkaworkss4=60}else if(Sstaz4<220){armsetkaworkss4=50}else if(Sstaz4<500){armsetkaworkss4=40}else if(Sstaz4<2000){armsetkaworkss4=30}else if(Sstaz4=>2000){armsetkaworkss4=20}if(Sstaz4<70){teplozvukwork4=70}else if(Sstaz4<150){teplozvukwork4=60}else if(Sstaz4<220){teplozvukwork4=50}else if(Sstaz4<500){teplozvukwork4=40}else if(Sstaz4<2000){teplozvukwork4=30}else if(Sstaz4=>2000){teplozvukwork4=20}DeliverysValue4=String(MaterialValue4*5/50+Sstaz4/350).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial4=(MaterialValue4*pesoks4+MaterialValue4*5*cement+MaterialValue4*1.5*fibro+Sstaz4*plenka*1.1+demlenta*Sstaz4*1.5)/MaterialValue4;PriceMaterial4=+PriceMaterial4.toFixed(2);CostMaterial4=roundTo05(PriceMaterial4*MaterialValue4+setkaarm*Sstaz4*1.1+penopleks*Sstaz4*1.1);CostMaterial4=+CostMaterial4.toFixed(2);if(TabStaz4<=70&&Sstaz4<=70){CostWork4=((Sstaz4*pricework1)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}else if(TabStaz4<=70&&Sstaz4<=150){CostWork4=((Sstaz4*pricework4)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}else if(TabStaz4<=70&&Sstaz4<=220){CostWork4=((Sstaz4*pricework7)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}else if(TabStaz4<=70&&Sstaz4>220){CostWork4=((Sstaz4*pricework10)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}if(TabStaz4>100&&Sstaz4<=70){CostWork4=((Sstaz4*pricework3)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}else if(TabStaz4>100&&Sstaz4<=150){CostWork4=((Sstaz4*pricework6)+(armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4))}else if(TabStaz4>100&&Sstaz4<=220){CostWork4=(Sstaz4*pricework9)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}else if(TabStaz4>100&&Sstaz4>220){CostWork4=(Sstaz4*pricework12)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}if(TabStaz4>70&&Sstaz4<=70){CostWork4=(Sstaz4*pricework2)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}else if(TabStaz4>70&&Sstaz4<=150){CostWork4=(Sstaz4*pricework5)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}else if(TabStaz4>70&&Sstaz4<=220){CostWork4=(Sstaz4*pricework8)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}else if(TabStaz4>70&&Sstaz4>220){CostWork4=(Sstaz4*pricework11)+armsetkaworkss4*Sstaz4+teplozvukwork4*Sstaz4}if(floors4<=3){Costfloors4=0}else if(floors4>3){Costfloors4=((floors4-3)*200)}SelfPrices4=CostMaterial4+CostWork4+ServicePnevm4*RentDay4+DeliverysValue4*delivery;ClientPrices4=roundTo100(CostWork4*2+CostMaterial4*1.4+Costfloors4+ServicePnevm4*RentDay4+delivery*DeliverysValue4);ClientPrices4=+ClientPrices4.toFixed();jQuery("#ServicePnevm4 span").html(ServicePnevm4+' руб.');jQuery("#RentDay4 span").html(RentDay4+' руб.');jQuery("#MaterialValue4 span").html(MaterialValue4+' руб.');jQuery("#DeliverysValue4 span").html(DeliverysValue4+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial4 span").html(PriceMaterial4+' руб.');jQuery("#CostMaterial4 span").html(CostMaterial4+' руб.');jQuery("#CostWork4 span").html(CostWork4+' руб.');jQuery("#Costfloors4 span").html(Costfloors4+' руб.');jQuery("#SelfPrices4 span").html(SelfPrices4+' руб.');jQuery("#ClientPrices4 span").html(ClientPrices4+' руб.');jQuery("#pesoks4 span").html(pesoks4+' руб.');jQuery("#armsetkaworkss4 span").html(armsetkaworkss4+' руб.');jQuery("#teplozvukwork4 span").html(teplozvukwork4+' руб.')};$(document).on("input","#Sstaz4",function(){Sstaz4=+$(this).val();$("#Sstaz4").slider("value",Sstaz4);recount()});$(document).on("input","#TabStaz4",function(){TabStaz4=+$(this).val();$("#TabStaz4").slider("value",TabStaz4);recount()});$(document).on("input","#floors4",function(){floors4=+$(this).val();$("#floors4").slider("value",floors4);recount()})});$(function(){$("#Sstaz4").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz4').val(ui.value).trigger("input")}});$("#Sstaz4").val($("#Sstaz4").slider("value"))});$(function(){$("#TabStaz4").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz4").val(ui.value).trigger("input")}});$("#TabStaz4").val($("#TabStaz4").slider("value"))});$(function(){$("#floors4").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors4").val(ui.value).trigger("input")}});$("#floors4").val($("#floors4").slider("value"))});jQuery(function(){var ServicePnevm5=0,RentDay5=0,MaterialValue5=0,DeliverysValue5=0,delivery=1000,PriceMaterial5=0,TabStaz5=1,TabKeramzits5=1,Sstaz5=1,floors5=0,CostMaterial5=0,CostWork5=0,Costfloors5=0,SelfPrices5=0,ClientPrices5=0,pesoks5=1,cement=285,fibro=260,plenka=16,demlenta=8,keramzit=2000,keramzitpriceworks5=0,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130;function recount(){if(Sstaz5<=250){ServicePnevm5=10000}else if(Sstaz5<=1500){ServicePnevm5=8000}else if(Sstaz5<=5000){ServicePnevm5=6000}else if(Sstaz5>5000){ServicePnevm5=5000}delivery=1000;MaterialValue5=(TabStaz5/1000)*Sstaz5;MaterialValue5=roundTo5(MaterialValue5);if((MaterialValue5/15)<1){RentDay5=1}else if((MaterialValue5/15)>=1){RentDay5=roundTo1(MaterialValue5/15)}if(MaterialValue5=>25){pesoks5=1100}if(MaterialValue5<20){pesoks5=1200}if(MaterialValue5<15){pesoks5=1300}if(MaterialValue5<10){pesoks5=1315}if(MaterialValue5<9.5){pesoks5=1389}if(MaterialValue5<9){pesoks5=1411.76}if(MaterialValue5<8.5){pesoks5=1437.5}if(MaterialValue5<8){pesoks5=1467}if(MaterialValue5<7.5){pesoks5=1500}if(MaterialValue5<7){pesoks5=1538}if(MaterialValue5<6.5){pesoks5=1583}if(MaterialValue5<6){pesoks5=1636.36}if(MaterialValue5<5.5){pesoks5=1700}if(MaterialValue5<5){pesoks5=1778}if(MaterialValue5<4.5){pesoks5=1875}if(MaterialValue5<4){pesoks5=2000}if(MaterialValue5<3.5){pesoks5=2100}if(TabKeramzits5<100){keramzitpriceworks5=100}else if(TabKeramzits5<150){keramzitpriceworks5=150}else if(TabKeramzits5<250){keramzitpriceworks5=200}else if(TabKeramzits5<300){keramzitpriceworks5=250}else if(TabKeramzits5=>300){keramzitpriceworks5=300}DeliverysValue5=String(MaterialValue5*5/50).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial5=(MaterialValue5*pesoks5+MaterialValue5*5*cement+MaterialValue5*1.5*fibro+Sstaz5*plenka*1.1+demlenta*Sstaz5*1.5)/MaterialValue5;PriceMaterial=+PriceMaterial5.toFixed(2);CostMaterial5=(PriceMaterial5*MaterialValue5+(keramzit+cement)*TabKeramzits5*Sstaz5/1000);CostMaterial5=+CostMaterial5.toFixed(2);if(TabStaz5<=70&&Sstaz5<=70){CostWork5=(Sstaz5*pricework1)+keramzitpriceworks5*Sstaz5}else if(TabStaz5<=70&&Sstaz5<=150){CostWork5=(Sstaz5*pricework4)+keramzitpriceworks5*Sstaz5}else if(TabStaz5<=70&&Sstaz5<=220){CostWork5=(Sstaz5*pricework7)+keramzitpriceworks5*Sstaz5}else if(TabStaz5<=70&&Sstaz5>220){CostWork5=(Sstaz5*pricework10)+keramzitpriceworks5*Sstaz5}if(TabStaz5>100&&Sstaz5<=70){CostWork5=(Sstaz5*pricework3)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>100&&Sstaz5<=150){CostWork5=(Sstaz5*pricework6)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>100&&Sstaz5<=220){CostWork5=(Sstaz5*pricework9)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>100&&Sstaz5>220){CostWork5=(Sstaz5*pricework12)+keramzitpriceworks5*Sstaz5}if(TabStaz5>70&&Sstaz5<=70){CostWork5=(Sstaz5*pricework2)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>70&&Sstaz5<=150){CostWork5=(Sstaz5*pricework5)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>70&&Sstaz5<=220){CostWork5=(Sstaz5*pricework8)+keramzitpriceworks5*Sstaz5}else if(TabStaz5>70&&Sstaz5>220){CostWork5=(Sstaz5*pricework11)+keramzitpriceworks5*Sstaz5}if(floors5<=3){Costfloors5=0}else if(floors5>3){Costfloors5=((floors5-3)*200)}SelfPrices5=CostMaterial5+CostWork5+ServicePnevm5*RentDay5+DeliverysValue5*delivery;ClientPrices5=roundTo100(CostWork5*2+CostMaterial5*1.4+Costfloors5+ServicePnevm5*RentDay5+delivery*DeliverysValue5);ClientPrices5=+ClientPrices5.toFixed();jQuery("#ServicePnevm5 span").html(ServicePnevm5+' руб.');jQuery("#RentDay5 span").html(RentDay5+' руб.');jQuery("#MaterialValue5 span").html(MaterialValue5+' руб.');jQuery("#DeliverysValue5 span").html(DeliverysValue5+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial5 span").html(PriceMaterial5+' руб.');jQuery("#CostMaterial5 span").html(CostMaterial5+' руб.');jQuery("#CostWork5 span").html(CostWork5+' руб.');jQuery("#Costfloors5 span").html(Costfloors5+' руб.');jQuery("#SelfPrices5 span").html(SelfPrices5+' руб.');jQuery("#ClientPrices5 span").html(ClientPrices5+' руб.');jQuery("#pesoks5 span").html(pesoks5+' руб.')};$(document).on("input","#Sstaz5",function(){Sstaz5=+$(this).val();$("#Sstaz5").slider("value",Sstaz5);recount()});$(document).on("input","#TabStaz5",function(){TabStaz5=+$(this).val();$("#TabStaz5").slider("value",TabStaz5);recount()});$(document).on("input","#TabKeramzits5",function(){TabKeramzits5=+$(this).val();$("#TabKeramzits5").slider("value",TabKeramzits5);recount()});$(document).on("input","#floors5",function(){floors5=+$(this).val();$("#floors5").slider("value",floors5);recount()})});$(function(){$("#Sstaz5").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz5').val(ui.value).trigger("input")}});$("#Sstaz5").val($("#Sstaz5").slider("value"))});$(function(){$("#TabStaz5").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz5").val(ui.value).trigger("input")}});$("#TabStaz5").val($("#TabStaz5").slider("value"))});$(function(){$("#TabKeramzits5").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabKeramzits5").val(ui.value).trigger("input")}});$("#TabKeramzits5").val($("#TabKeramzits5").slider("value"))});$(function(){$("#floors5").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors5").val(ui.value).trigger("input")}});$("#floors5").val($("#floors5").slider("value"))});jQuery(function(){var ServicePnevm6=0,RentDay6=0,MaterialValue6=0,DeliverysValue6=0,delivery=1000,PriceMaterial6=0,TabStaz6=1,TabKeramzits6=1,Sstaz6=1,floors6=0,CostMaterial6=0,CostWork6=0,Costfloors6=0,SelfPrices6=0,ClientPrices6=0,pesoks6=1,cement=285,fibro=260,plenka=16,demlenta=8,keramzit=2000,setkaarm=65,keramzitpriceworks6=0,armsetkaworkss6=0,pricework1=170,pricework2=190,pricework3=210,pricework4=130,pricework5=150,pricework6=170,pricework7=120,pricework8=140,pricework9=160,pricework10=100,pricework11=120,pricework12=130;function recount(){if(Sstaz6<=250){ServicePnevm6=10000}else if(Sstaz6<=1500){ServicePnevm6=8000}else if(Sstaz6<=5000){ServicePnevm6=6000}else if(Sstaz6>5000){ServicePnevm6=5000}delivery=1000;MaterialValue6=(TabStaz6/1000)*Sstaz6;MaterialValue6=roundTo5(MaterialValue6);if((MaterialValue6/15)<1){RentDay6=1}else if((MaterialValue6/15)>=1){RentDay6=roundTo1(MaterialValue6/15)}if(MaterialValue6=>25){pesoks6=1100}if(MaterialValue6<20){pesoks6=1200}if(MaterialValue6<15){pesoks6=1300}if(MaterialValue6<10){pesoks6=1315}if(MaterialValue6<9.5){pesoks6=1389}if(MaterialValue6<9){pesoks6=1411.76}if(MaterialValue6<8.5){pesoks6=1437.5}if(MaterialValue6<8){pesoks6=1467}if(MaterialValue6<7.5){pesoks6=1500}if(MaterialValue6<7){pesoks6=1538}if(MaterialValue6<6.5){pesoks6=1583}if(MaterialValue6<6){pesoks6=1636.36}if(MaterialValue6<5.5){pesoks6=1700}if(MaterialValue6<5){pesoks6=1778}if(MaterialValue6<4.5){pesoks6=1875}if(MaterialValue6<4){pesoks6=2000}if(MaterialValue6<3.5){pesoks6=2100}if(TabStaz6<70){armsetkaworkss6=70}else if(TabStaz6<150){armsetkaworkss6=60}else if(TabStaz6<220){armsetkaworkss6=50}else if(TabStaz6<500){armsetkaworkss6=40}else if(TabStaz6<2000){armsetkaworkss6=30}else if(TabStaz6=>2000){armsetkaworkss6=20}if(TabKeramzits6<100){keramzitpriceworks6=100}else if(TabKeramzits6<150){keramzitpriceworks6=150}else if(TabKeramzits6<250){keramzitpriceworks6=200}else if(TabKeramzits6<300){keramzitpriceworks6=250}else if(TabKeramzits6=>300){keramzitpriceworks6=300}DeliverysValue6=String(MaterialValue6*5/50).replace(/\.0*$/,"").replace(/(\d?)(9*)\..*$/,function(m,d,n){return~~d+1+n.replace(/9/g,0)});PriceMaterial6=(MaterialValue6*pesoks6+MaterialValue6*5*cement+MaterialValue6*1.5*fibro+Sstaz6*plenka*1.1+demlenta*Sstaz6*1.5)/MaterialValue6;PriceMaterial6=+PriceMaterial6.toFixed(2);CostMaterial6=(PriceMaterial6*MaterialValue6+(keramzit+cement)*TabKeramzits6*Sstaz6/1000+setkaarm*Sstaz6*1.1);CostMaterial6=+CostMaterial6.toFixed(2);if(TabStaz6<=70&&Sstaz6<=70){CostWork6=(Sstaz6*pricework1)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6<=70&&Sstaz6<=150){CostWork6=(Sstaz6*pricework4)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6<=70&&Sstaz6<=220){CostWork6=(Sstaz6*pricework7)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6<=70&&Sstaz6>220){CostWork6=(Sstaz6*pricework10)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}if(TabStaz6>100&&Sstaz6<=70){CostWork6=(Sstaz6*pricework3)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>100&&Sstaz6<=150){CostWork6=(Sstaz6*pricework6)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>100&&Sstaz6<=220){CostWork6=(Sstaz6*pricework9)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>100&&Sstaz6>220){CostWork6=(Sstaz6*pricework12)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}if(TabStaz6>70&&Sstaz6<=70){CostWork6=(Sstaz6*pricework2)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>70&&Sstaz6<=150){CostWork6=(Sstaz6*pricework5)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>70&&Sstaz6<=220){CostWork6=(Sstaz6*pricework8)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}else if(TabStaz6>70&&Sstaz6>220){CostWork6=(Sstaz6*pricework11)+keramzitpriceworks6*Sstaz6+armsetkaworkss6*Sstaz6}if(floors6<=3){Costfloors6=0}else if(floors6>3){Costfloors6=((floors6-3)*200)}SelfPrices6=CostMaterial6+CostWork6+ServicePnevm6*RentDay6+DeliverysValue6*delivery;ClientPrices6=roundTo100(CostWork6*2+CostMaterial6*1.4+Costfloors6+ServicePnevm6*RentDay6+delivery*DeliverysValue6);ClientPrices6=+ClientPrices6.toFixed();jQuery("#ServicePnevm6 span").html(ServicePnevm6+' руб.');jQuery("#RentDay6 span").html(RentDay6+' руб.');jQuery("#MaterialValue6 span").html(MaterialValue6+' руб.');jQuery("#DeliverysValue6 span").html(DeliverysValue6+' руб.');jQuery("#delivery span").html(delivery+' руб.');jQuery("#PriceMaterial6 span").html(PriceMaterial6+' руб.');jQuery("#CostMaterial6 span").html(CostMaterial6+' руб.');jQuery("#CostWork6 span").html(CostWork6+' руб.');jQuery("#Costfloors6 span").html(Costfloors6+' руб.');jQuery("#SelfPrices6 span").html(SelfPrices6+' руб.');jQuery("#ClientPrices6 span").html(ClientPrices6+' руб.');jQuery("#pesoks6 span").html(pesoks6+' руб.');jQuery("#keramzitwork6 span").html(keramzitpriceworks6+' руб.');jQuery("#armsetkaworkss6 span").html(armsetkaworkss6+' руб.')};$(document).on("input","#Sstaz6",function(){Sstaz6=+$(this).val();$("#Sstaz6").slider("value",Sstaz6);recount()});$(document).on("input","#TabStaz6",function(){TabStaz6=+$(this).val();$("#TabStaz6").slider("value",TabStaz6);recount()});$(document).on("input","#TabKeramzits6",function(){TabKeramzits6=+$(this).val();$("#TabKeramzits6").slider("value",TabKeramzits6);recount()});$(document).on("input","#floors6",function(){floors6=+$(this).val();$("#floors6").slider("value",floors6);recount()})});$(function(){$("#Sstaz6").slider({range:"min",value:1,min:1,max:999,slide:function(event,ui){$('#Sstaz6').val(ui.value).trigger("input")}});$("#Sstaz6").val($("#Sstaz6").slider("value"))});$(function(){$("#TabStaz6").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabStaz6").val(ui.value).trigger("input")}});$("#TabStaz6").val($("#TabStaz6").slider("value"))});$(function(){$("#TabKeramzits6").slider({range:"min",value:1,min:1,max:150,slide:function(event,ui){$("#TabKeramzits6").val(ui.value).trigger("input")}});$("#TabKeramzits6").val($("#TabKeramzits6").slider("value"))});$(function(){$("#floors6").slider({range:"min",value:1,min:1,max:500000,slide:function(event,ui){$("#floors6").val(ui.value).trigger("input")}});$("#floors6").val($("#floors6").slider("value"))});(function(){function decimalAdjust(type,value,exp){if(typeof exp==='undefined'||+exp===0){return Math[type](value)}value=+value;exp=+exp;if(isNaN(value)||!(typeof exp==='number'&&exp%1===0)){return NaN}value=value.toString().split('e');value=Math[type](+(value[0]+'e'+(value[1]?(+value[1]-exp):-exp)));value=value.toString().split('e');return+(value[0]+'e'+(value[1]?(+value[1]+exp):exp))}if(!Math.round10){Math.round10=function(value,exp){return decimalAdjust('round',value,exp)}}if(!Math.floors10){Math.floors10=function(value,exp){return decimalAdjust('floors',value,exp)}}if(!Math.ceil10){Math.ceil10=function(value,exp){return decimalAdjust('ceil',value,exp)}}})();function roundTo5(num){return Math.ceil(num/0.1)*0.1}function roundTo1(num){return Math.round(num/1)*1}function roundTo05(num){return Math.round(num/0.5)*0.5}function roundTo100(num){return Math.round(num/100)*100}function gaussRound(num,decimalPlaces){let d=decimalPlaces||0,m=Math.pow(10,d),n=+(d?num*m:num).toFixed(8),i=Math.floors(n),f=n-i,e=1e-8,r=(f>0.5-e&&f<0.5+e)?((i%2==0)?i:i+1):Math.round(n);return d?r/m:r}function fn(arr,num){return arr.map(function(a){return a%num?a+num-a%num:a})};function round2(value,decimals){return Number(Math.round(value+'e'+decimals)+'e-'+decimals)}
