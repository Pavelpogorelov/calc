// Калькулятор 1 - Теплая Стяжка

jQuery(function() {
  var
    ServicePnevmo1 = 0,
    RentDays1 = 0,
    MaterialsValue1 = 0,
    DeliveryValue1 = 0,
    delivery = 1000,
    PriceMaterials1 = 0,
    TabStazh1 = 1,
    Sstazh1 = 1, 
    floor1 = 0,
    CostMaterials1 = 0,
    CostWorks1 = 0,
    CostFloor1 = 0,
    SelfPrice1 = 0,
    ClientPrice1 = 0,
    pesok1 = 1,
    cement = 285,
    fibro = 260,
    plasti = 3000,
    demlenta = 8,
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130; // Цена работы за 1 м2: больше 10 см, более 220 м2	

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh1 <= 250) {
        ServicePnevmo1 = 10000;
    } else if (Sstazh1 <= 1500) {
        ServicePnevmo1 = 8000;
    } else if (Sstazh1 <= 5000) {
        ServicePnevmo1 = 6000;
    } else if (Sstazh1 > 5000) {
        ServicePnevmo1 = 5000;
    }
    
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue1 = (TabStazh1 / 1000) * Sstazh1;
    MaterialsValue1 = roundTo5(MaterialsValue1);
    
     // Дни аренды
    
    if ((MaterialsValue1 / 15 ) < 1 ) {
        RentDays1 = 1; 
    } else if ((MaterialsValue1 / 15 ) >= 1)  { 
        RentDays1 = roundTo1(MaterialsValue1 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue1 => 25 ) {
        pesok1 = 1100;
     }    
     if (MaterialsValue1 < 20 ) {
        pesok1 = 1200;
    }   
     if (MaterialsValue1 < 15 ) {
        pesok1 = 1300;
    }   
     if (MaterialsValue1 < 10 ) {
        pesok1 = 1315;
    }
     if (MaterialsValue1 < 9.5 ) {
        pesok1 = 1389;
    }
    if (MaterialsValue1 < 9 ) {
        pesok1 = 1411.76;
    }
    if (MaterialsValue1 < 8.5 ) {
        pesok1 = 1437.5;
    }
    if (MaterialsValue1 < 8 ) {
        pesok1 = 1467;
    }
     if (MaterialsValue1 < 7.5 ) {
        pesok1 = 1500;
    }
     if (MaterialsValue1 < 7 ) {
        pesok1 = 1538;
    }
    if (MaterialsValue1 < 6.5 ) {
        pesok1 = 1583;
    }
    if (MaterialsValue1 < 6 ) {
        pesok1 = 1636.36;
    }
     if (MaterialsValue1 < 5.5 ) {
        pesok1 = 1700;
    }
     if (MaterialsValue1 < 5 ) {
        pesok1 = 1778;
    }
     if (MaterialsValue1 < 4.5 ) {
        pesok1 = 1875;
    }
    if (MaterialsValue1 < 4 ) {
        pesok1 = 2000;
    }
    if (MaterialsValue1 < 3.5 ) {
        pesok1 = 2100;
    }
    
    
    // Расчет количества доставок
    DeliveryValue1 = String(MaterialsValue1 * 5 / 50 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials1 = (MaterialsValue1 * pesok1 + MaterialsValue1 * 5 * cement + MaterialsValue1 * 1.5 * fibro + MaterialsValue1 * plasti * 0.35 + demlenta * Sstazh1 * 1.5 ) / MaterialsValue1 ;
    PriceMaterials1 = +PriceMaterials1.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials1 =  roundTo05(PriceMaterials1 * MaterialsValue1) ;
    CostMaterials1 = +CostMaterials1.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh1 <= 70 && Sstazh1 <= 70) {
        CostWorks1 = Sstazh1 * pricework1;
    }  else if (TabStazh1 <= 70 && Sstazh1 <= 150) {
        CostWorks1 = Sstazh1 * pricework4;
    }  else if (TabStazh1 <= 70 && Sstazh1 <= 220) {
        CostWorks1 = Sstazh1 * pricework7;
    }  else if (TabStazh1 <= 70 && Sstazh1 > 220) {
        CostWorks1 = Sstazh1 * pricework10;
    }
    if (TabStazh1 > 100 && Sstazh1 <= 70) {
        CostWorks1 = Sstazh1 * pricework3;
    }  
        else if (TabStazh1 > 100 && Sstazh1 <= 150) {
        CostWorks1 = Sstazh1 * pricework6;
    }   
        else if (TabStazh1 > 100 && Sstazh1 <= 220) {
        CostWorks1 = Sstazh1 * pricework9;
    }  
        else if (TabStazh1 > 100 && Sstazh1 > 220) {
        CostWorks1 = Sstazh1 * pricework12;
    }  
    if (TabStazh1 > 70 && Sstazh1 <= 70) {
        CostWorks1 = (Sstazh1 * pricework2);
    }  
        else if (TabStazh1 > 70 && Sstazh1 <= 150) {
        CostWorks1 = (Sstazh1 * pricework5);
    }  
        else if (TabStazh1 > 70 && Sstazh1 <= 220) {
        CostWorks1 = (Sstazh1 * pricework8);
    }  
        else if (TabStazh1 > 70 && Sstazh1 > 220) {
        CostWorks1 = (Sstazh1 * pricework11);
    }     
   
    // Расчет наценки за этаж
    
    if (floor1 <= 3 ) {
        CostFloor1 = 0;
    } else if (floor1 > 3) {
        CostFloor1 = (( floor1 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice1 = CostMaterials1 + CostWorks1 + ServicePnevmo1 * RentDays1 + DeliveryValue1 * delivery ;
    
    // Расчет Клиентской стоимости
    
    if (TabStazh1 < 50 ) {
        ClientPrice1 = 'Минимальная толщина стяжки 50мм' ;
    } else if (TabStazh1 => 50 ) {
         ClientPrice1 = roundTo100(CostWorks1 * 2 + CostMaterials1 * 1.4 + CostFloor1 + ServicePnevmo1 * RentDays1 + delivery * DeliveryValue1);
         ClientPrice1 = +ClientPrice1.toFixed();
    }
    
    
    
   
   
        
    
    
        
        
    
    jQuery("#ServicePnevmo1 span").html(ServicePnevmo1 + ' руб.');
    jQuery("#RentDays1 span").html(RentDays1 + ' руб.');
    jQuery("#MaterialsValue1 span").html(MaterialsValue1 + ' руб.');
    jQuery("#DeliveryValue1 span").html(DeliveryValue1 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials1 span").html(PriceMaterials1 + ' руб.');
    jQuery("#CostMaterials1 span").html(CostMaterials1 + ' руб.');
    jQuery("#CostWorks1 span").html(CostWorks1 + ' руб.');
    jQuery("#CostFloor1 span").html(CostFloor1 + ' руб.');
    jQuery("#SelfPrice1 span").html(SelfPrice1 + ' руб.');
    jQuery("#ClientPrice1 span").html(ClientPrice1 + ' руб.');
    jQuery("#pesok1 span").html(pesok1 + ' руб.');
    
    document.getElementById('ClientPrice1').value=ClientPrice1; 

  };
  
  $(document).on("input", "#Sstazh1", function() {
    Sstazh1 = +$(this).val();
    $("#Sstazh1").slider("value", Sstazh1);
    recount();
  });
  $(document).on("input", "#TabStazh1", function() {
    TabStazh1 = +$(this).val();
    $("#TabStazh1").slider("value", TabStazh1);
    recount();
  });
  $(document).on("input", "#floor1", function() {
    floor1= +$(this).val();
    $("#floor1").slider("value", floor1);
    recount();
  });
});
$(function() {
  $("#Sstazh1").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh1').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh1").val($("#Sstazh1").slider("value"));
});

$(function() {
  $("#TabStazh1").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabStazh1").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh1").val($("#TabStazh1").slider("value"));
});

$(function() {
  $("#floor1").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor1").val(ui.value).trigger("input");
    }
  });
  $("#floor1").val($("#floor1").slider("value"));
});

// Конец Калькулятора 1 - ТЕПЛЫЙ ПОЛ















// Калькулятор 2 - КЛАССИЧЕСКАЯ СТЯЖКА


jQuery(function() {
  var 
    ServicePnevmo2 = 0,
    RentDays2 = 0,
    MaterialsValue2 = 0,
    DeliveryValue2 = 0,
    delivery = 1000,
    PriceMaterials2 = 0,
    TabStazh2 = 1,
    Sstazh2 = 1, 
    floor2 = 0,
    CostMaterials2 = 0,
    CostWorks2 = 0,
    CostFloor2 = 0,
    SelfPrice2 = 0,
    ClientPrice2 = 0,
    pesok2 = 1,
    cement = 285,
    fibro = 260,
    plenka = 16,
    demlenta = 8,
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130; // Цена работы за 1 м2: больше 10 см, более 220 м2	

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh2 <= 250) {
        ServicePnevmo2 = 10000;
    } else if (Sstazh2 <= 1500) {
        ServicePnevmo2 = 8000;
    } else if (Sstazh2 <= 5000) {
        ServicePnevmo2 = 6000;
    } else if (Sstazh2 > 5000) {
        ServicePnevmo2 = 5000;
    }
    
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue2 = (TabStazh2 / 1000) * Sstazh2;
    MaterialsValue2 = roundTo5(MaterialsValue2);
    
     // Дни аренды
    
    if ((MaterialsValue2 / 15 ) < 1 ) {
        RentDays2 = 1; 
    } else if ((MaterialsValue2 / 15 ) >= 1)  { 
        RentDays2 = roundTo1(MaterialsValue2 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue2 => 25 ) {
        pesok2 = 1100;
     }    
     if (MaterialsValue2 < 20 ) {
        pesok2 = 1200;
    }   
     if (MaterialsValue2 < 15 ) {
        pesok2 = 1300;
    }   
     if (MaterialsValue2 < 10 ) {
        pesok2 = 1315;
    }
     if (MaterialsValue2 < 9.5 ) {
        pesok2 = 1389;
    }
    if (MaterialsValue2 < 9 ) {
        pesok2 = 1411.76;
    }
    if (MaterialsValue2 < 8.5 ) {
        pesok2 = 1437.5;
    }
    if (MaterialsValue2 < 8 ) {
        pesok2 = 1467;
    }
     if (MaterialsValue2 < 7.5 ) {
        pesok2 = 1500;
    }
     if (MaterialsValue2 < 7 ) {
        pesok2 = 1538;
    }
    if (MaterialsValue2 < 6.5 ) {
        pesok2 = 1583;
    }
    if (MaterialsValue2 < 6 ) {
        pesok2 = 1636.36;
    }
     if (MaterialsValue2 < 5.5 ) {
        pesok2 = 1700;
    }
     if (MaterialsValue2 < 5 ) {
        pesok2 = 1778;
    }
     if (MaterialsValue2 < 4.5 ) {
        pesok2 = 1875;
    }
    if (MaterialsValue2 < 4 ) {
        pesok2 = 2000;
    }
    if (MaterialsValue2 < 3.5 ) {
        pesok2 = 2100;
    }
    
    
    // Расчет количества доставок
    DeliveryValue2 = String(MaterialsValue2 * 5 / 50 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials2 = (MaterialsValue2 * pesok2 + MaterialsValue2 * 5 * cement + MaterialsValue2 * 1.5 * fibro + Sstazh2 * plenka * 1.1 + demlenta * Sstazh2 * 1.5 ) / MaterialsValue2 ;
    PriceMaterials2 = +PriceMaterials2.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials2 =  roundTo05(PriceMaterials2 * MaterialsValue2) ;
    CostMaterials2 = +CostMaterials2.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh2 <= 70 && Sstazh2 <= 70) {
        CostWorks2 = Sstazh2 * pricework1;
    }  else if (TabStazh2 <= 70 && Sstazh2 <= 150) {
        CostWorks2 = Sstazh2 * pricework4;
    }  else if (TabStazh2 <= 70 && Sstazh2 <= 220) {
        CostWorks2 = Sstazh2 * pricework7;
    }  else if (TabStazh2 <= 70 && Sstazh2 > 220) {
        CostWorks2 = Sstazh2 * pricework10;
    }
    if (TabStazh2 > 100 && Sstazh2 <= 70) {
        CostWorks2 = Sstazh2 * pricework3;
    }  
        else if (TabStazh2 > 100 && Sstazh2 <= 150) {
        CostWorks2 = Sstazh2 * pricework6;
    }   
        else if (TabStazh2 > 100 && Sstazh2 <= 220) {
        CostWorks2 = Sstazh2 * pricework9;
    }  
        else if (TabStazh2 > 100 && Sstazh2 > 220) {
        CostWorks2 = Sstazh2 * pricework12;
    }  
    if (TabStazh2 > 70 && Sstazh2 <= 70) {
        CostWorks2 = (Sstazh2 * pricework2);
    }  
        else if (TabStazh2 > 70 && Sstazh2 <= 150) {
        CostWorks2 = (Sstazh2 * pricework5);
    }  
        else if (TabStazh2 > 70 && Sstazh2 <= 220) {
        CostWorks2 = (Sstazh2 * pricework8);
    }  
        else if (TabStazh2 > 70 && Sstazh2 > 220) {
        CostWorks2 = (Sstazh2 * pricework11);
    }     
   
    // Расчет наценки за этаж
    
    if (floor2 <= 3 ) {
        CostFloor2 = 0;
    } else if (floor2 > 3) {
        CostFloor2 = (( floor2 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice2 = CostMaterials2 + CostWorks2 + ServicePnevmo2 * RentDays2 + DeliveryValue2 * delivery ;
    
    // Расчет Клиентской стоимости
    
    
         ClientPrice2 = roundTo100(CostWorks2 * 2 + CostMaterials2 * 1.4 + CostFloor2 + ServicePnevmo2 * RentDays2 + delivery * DeliveryValue2);
         ClientPrice2 = +ClientPrice2.toFixed();
    
    
    
    
   
   
        
    
    
        
        
   
    jQuery("#ServicePnevmo2 span").html(ServicePnevmo2 + ' руб.');
    jQuery("#RentDays2 span").html(RentDays2 + ' руб.');
    jQuery("#MaterialsValue2 span").html(MaterialsValue2 + ' руб.');
    jQuery("#DeliveryValue2 span").html(DeliveryValue2 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials2 span").html(PriceMaterials2 + ' руб.');
    jQuery("#CostMaterials2 span").html(CostMaterials2 + ' руб.');
    jQuery("#CostWorks2 span").html(CostWorks2 + ' руб.');
    jQuery("#CostFloor2 span").html(CostFloor2 + ' руб.');
    jQuery("#SelfPrice2 span").html(SelfPrice2 + ' руб.');
    jQuery("#ClientPrice2 span").html(ClientPrice2 + ' руб.');
    jQuery("#pesok2 span").html(pesok2 + ' руб.');
    

  };
  
  $(document).on("input", "#Sstazh2", function() {
    Sstazh2 = +$(this).val();
    $("#Sstazh2").slider("value", Sstazh2);
    recount();
  });
  $(document).on("input", "#TabStazh2", function() {
    TabStazh2 = +$(this).val();
    $("#TabStazh2").slider("value", TabStazh2);
    recount();
  });
  $(document).on("input", "#floor2", function() {
    floor2 = +$(this).val();
    $("#floor2").slider("value", floor2);
    recount();
  });
});
$(function() {
  $("#Sstazh2").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh2').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh2").val($("#Sstazh2").slider("value"));
});

$(function() {
  $("#TabStazh2").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabStazh2").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh2").val($("#TabStazh2").slider("value"));
});

$(function() {
  $("#floor2").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor2").val(ui.value).trigger("input");
    }
  });
  $("#floor2").val($("#floor2").slider("value"));
});



// КОНЕЦ Калькулятор 2 КЛАССИЧЕСКАЯ СТЯЖКА








// НАЧАЛО Калькулятор 3 КЛАССИЧЕСКАЯ СТЯЖКА С СЕТКОЙ



jQuery(function() {
  var 
    ServicePnevmo3 = 0,
    RentDays3 = 0,
    MaterialsValue3 = 0,
    DeliveryValue3 = 0,
    delivery = 1000,
    PriceMaterials3 = 0,
    TabStazh3 = 1,
    Sstazh3 = 1, 
    floor3 = 0,
    CostMaterials3 = 0,
    CostWorks3 = 0,
    CostFloor3 = 0,
    SelfPrice3 = 0,
    ClientPrice3 = 0,
    pesok3 = 1,
    cement = 285,
    fibro = 260,
    plenka = 16,
    demlenta = 8,
    setkaarm = 65,
    
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130, // Цена работы за 1 м2: больше 10 см, более 220 м2	
    armsetkawork3 = 0;

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh3 <= 250) {
        ServicePnevmo3 = 10000;
    } else if (Sstazh3 <= 1500) {
        ServicePnevmo3 = 8000;
    } else if (Sstazh3 <= 5000) {
        ServicePnevmo3 = 6000;
    } else if (Sstazh3 > 5000) {
        ServicePnevmo3 = 5000;
    }
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue3 = (TabStazh3 / 1000) * Sstazh3;
    MaterialsValue3 = roundTo5(MaterialsValue3);
    
     
    // Дни аренды
    
    if ((MaterialsValue3 / 15 ) < 1 ) {
        RentDays3 = 1; 
    } else if ((MaterialsValue3 / 15 ) >= 1)  { 
        RentDays3 = roundTo1(MaterialsValue3 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue3 => 25 ) {
        pesok3 = 1100;
     }    
     if (MaterialsValue3 < 20 ) {
        pesok3 = 1200;
    }   
     if (MaterialsValue3 < 15 ) {
        pesok3 = 1300;
    }   
     if (MaterialsValue3 < 10 ) {
        pesok3 = 1315;
    }
     if (MaterialsValue3 < 9.5 ) {
        pesok3 = 1389;
    }
    if (MaterialsValue3 < 9 ) {
        pesok3 = 1411.76;
    }
    if (MaterialsValue3 < 8.5 ) {
        pesok3 = 1437.5;
    }
    if (MaterialsValue3 < 8 ) {
        pesok3 = 1467;
    }
     if (MaterialsValue3 < 7.5 ) {
        pesok3 = 1500;
    }
     if (MaterialsValue3 < 7 ) {
        pesok3 = 1538;
    }
    if (MaterialsValue3 < 6.5 ) {
        pesok3 = 1583;
    }
    if (MaterialsValue3 < 6 ) {
        pesok3 = 1636.36;
    }
     if (MaterialsValue3 < 5.5 ) {
        pesok3 = 1700;
    }
     if (MaterialsValue3 < 5 ) {
        pesok3 = 1778;
    }
     if (MaterialsValue3 < 4.5 ) {
        pesok3 = 1875;
    }
    if (MaterialsValue3 < 4 ) {
        pesok3 = 2000;
    }
    if (MaterialsValue3 < 3.5 ) {
        pesok3 = 2100;
    }
    
    
    
    // Стоимость Укладка армирующей сетки
     if (Sstazh3 < 70 ) {
        armsetkawork3 = 70;
     }    
     else if (Sstazh3 < 150 ) {
        armsetkawork3 = 60;
     }   
     else if (Sstazh3 < 220 ) {
        armsetkawork3 = 50;
     }   
     else if (Sstazh3 < 500 ) {
        armsetkawork3 = 40;
     }  
     else if (Sstazh3 < 2000 ) {
        armsetkawork3 = 30;
     }   
     else if (Sstazh3 => 2000 ) {
        armsetkawork3 = 20;
     }   
    
    
    
    
    // Расчет количества доставок
    DeliveryValue3 = String(MaterialsValue3 * 5 / 50 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials3 = (MaterialsValue3 * pesok3 + MaterialsValue3 * 5 * cement + MaterialsValue3 * 1.5 * fibro + Sstazh3 * plenka * 1.1 + demlenta * Sstazh3 * 1.5 ) / MaterialsValue3 ;
    PriceMaterials3 = +PriceMaterials3.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials3 =  roundTo05(PriceMaterials3 * MaterialsValue3 + setkaarm * Sstazh3 * 1.1) ;
    CostMaterials3 = +CostMaterials3.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh3 <= 70 && Sstazh3 <= 70) {
        CostWorks3 = ((Sstazh3 * pricework1) + (armsetkawork3 * Sstazh3));
    }  else if (TabStazh3 <= 70 && Sstazh3 <= 150) {
        CostWorks3 = ((Sstazh3 * pricework4)  + (armsetkawork3 * Sstazh3));
    }  else if (TabStazh3 <= 70 && Sstazh3 <= 220) {
        CostWorks3 = ((Sstazh3 * pricework7)  + (armsetkawork3 * Sstazh3));
    }  else if (TabStazh3 <= 70 && Sstazh3 > 220) {
        CostWorks3 = ((Sstazh3 * pricework10)  + (armsetkawork3 * Sstazh3));
    }
    if (TabStazh3 > 100 && Sstazh3 <= 70) {
        CostWorks3 = ((Sstazh3 * pricework3)  + (armsetkawork3 * Sstazh3));
    }  
        else if (TabStazh3 > 100 && Sstazh3 <= 150) {
        CostWorks3 = ((Sstazh3 * pricework6)  + (armsetkawork3 * Sstazh3));
    }   
        else if (TabStazh3 > 100 && Sstazh3 <= 220) {
        CostWorks3 = (Sstazh3 * pricework9)  + armsetkawork3 * Sstazh3;
    }  
        else if (TabStazh3 > 100 && Sstazh3 > 220) {
        CostWorks3 = (Sstazh3 * pricework12)  + armsetkawork3 * Sstazh3;
    }  
    if (TabStazh3 > 70 && Sstazh3 <= 70) {
        CostWorks3 = (Sstazh3 * pricework2)  + armsetkawork3 * Sstazh3;
    }  
        else if (TabStazh3 > 70 && Sstazh3 <= 150) {
        CostWorks3 = (Sstazh3 * pricework5)  + armsetkawork3 * Sstazh3;
    }  
        else if (TabStazh3 > 70 && Sstazh3 <= 220) {
        CostWorks3 = (Sstazh3 * pricework8)  + armsetkawork3 * Sstazh3;
    }  
        else if (TabStazh3 > 70 && Sstazh3 > 220) {
        CostWorks3 = (Sstazh3 * pricework11)  + armsetkawork3 * Sstazh3;
    }     
   
    // Расчет наценки за этаж
    
    if (floor3 <= 3 ) {
        CostFloor3 = 0;
    } else if (floor3 > 3) {
        CostFloor3 = (( floor3 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice3 = CostMaterials3 + CostWorks3 + ServicePnevmo3 * RentDays3 + DeliveryValue3 * delivery ;
    
    // Расчет Клиентской стоимости
    
    
         ClientPrice3 = roundTo100(CostWorks3 * 2 + CostMaterials3 * 1.4 + CostFloor3 + ServicePnevmo3 * RentDays3 + delivery * DeliveryValue3);
         ClientPrice3 = +ClientPrice3.toFixed();
    
    
    
    
    jQuery("#ServicePnevmo3 span").html(ServicePnevmo3 + ' руб.');
    jQuery("#RentDays3 span").html(RentDays3 + ' руб.');
    jQuery("#MaterialsValue3 span").html(MaterialsValue3 + ' руб.');
    jQuery("#DeliveryValue3 span").html(DeliveryValue3 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials3 span").html(PriceMaterials3 + ' руб.');
    jQuery("#CostMaterials3 span").html(CostMaterials3 + ' руб.');
    jQuery("#CostWorks3 span").html(CostWorks3 + ' руб.');
    jQuery("#CostFloor3 span").html(CostFloor3 + ' руб.');
    jQuery("#SelfPrice3 span").html(SelfPrice3 + ' руб.');
    jQuery("#ClientPrice3 span").html(ClientPrice3 + ' руб.');
    jQuery("#pesok3 span").html(pesok3 + ' руб.');
    jQuery("#armsetkawork3 span").html(armsetkawork3 + ' руб.');
    
    
    

  };
  
  $(document).on("input", "#Sstazh3", function() {
    Sstazh3 = +$(this).val();
    $("#Sstazh3").slider("value", Sstazh3);
    recount();
  });
  $(document).on("input", "#TabStazh3", function() {
    TabStazh3 = +$(this).val();
    $("#TabStazh3").slider("value", TabStazh3);
    recount();
  });
  $(document).on("input", "#floor3", function() {
    floor3 = +$(this).val();
    $("#floor3").slider("value", floor3);
    recount();
  });
});
$(function() {
  $("#Sstazh3").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh3').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh3").val($("#Sstazh3").slider("value"));
});

$(function() {
  $("#TabStazh3").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabStazh3").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh3").val($("#TabStazh3").slider("value"));
});

$(function() {
  $("#floor3").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor3").val(ui.value).trigger("input");
    }
  });
  $("#floor3").val($("#floor3").slider("value"));
});


// КОНЕЦ Калькулятора 3 - КЛАССИЧЕСКАЯ СТЯЖКА С СЕТКОЙ









// НАЧАЛО Калькулятора 4 - СТЯЖКА С ТЕПЛО-ЗВУКОИЗОЛЯЦИЕЙ


jQuery(function() {
  var 
    ServicePnevmo4 = 0,
    RentDays4 = 0,
    MaterialsValue4 = 0,
    DeliveryValue4 = 0,
    delivery = 1000,
    PriceMaterials4 = 0,
    TabStazh4 = 1,
    Sstazh4 = 1, 
    floor4 = 0,
    CostMaterials4 = 0,
    CostWorks4 = 0,
    CostFloor4 = 0,
    SelfPrice4 = 0,
    ClientPrice4 = 0,
    pesok4 = 1,
    cement = 285,
    fibro = 260,
    plenka = 16,
    demlenta = 8,
    setkaarm = 65,
    penopleks = 110,
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130, // Цена работы за 1 м2: больше 10 см, более 220 м2	
    armsetkawork4 = 0,
    teplozvukwork4 = 0;

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh4 <= 250) {
        ServicePnevmo4 = 10000;
    } else if (Sstazh4 <= 1500) {
        ServicePnevmo4 = 8000;
    } else if (Sstazh4 <= 5000) {
        ServicePnevmo4 = 6000;
    } else if (Sstazh4 > 5000) {
        ServicePnevmo4 = 5000;
    }
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue4 = (TabStazh4 / 1000) * Sstazh4;
    MaterialsValue4 = roundTo5(MaterialsValue4);
    
     
    // Дни аренды
    
    if ((MaterialsValue4 / 15 ) < 1 ) {
        RentDays4 = 1; 
    } else if ((MaterialsValue4 / 15 ) >= 1)  { 
        RentDays4 = roundTo1(MaterialsValue4 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue4 => 25 ) {
        pesok4 = 1100;
     }    
     if (MaterialsValue4 < 20 ) {
        pesok4 = 1200;
    }   
     if (MaterialsValue4 < 15 ) {
        pesok4 = 1300;
    }   
     if (MaterialsValue4 < 10 ) {
        pesok4 = 1315;
    }
     if (MaterialsValue4 < 9.5 ) {
        pesok4 = 1389;
    }
    if (MaterialsValue4 < 9 ) {
        pesok4 = 1411.76;
    }
    if (MaterialsValue4 < 8.5 ) {
        pesok4 = 1437.5;
    }
    if (MaterialsValue4 < 8 ) {
        pesok4 = 1467;
    }
     if (MaterialsValue4 < 7.5 ) {
        pesok4 = 1500;
    }
     if (MaterialsValue4 < 7 ) {
        pesok4 = 1538;
    }
    if (MaterialsValue4 < 6.5 ) {
        pesok4 = 1583;
    }
    if (MaterialsValue4 < 6 ) {
        pesok4 = 1636.36;
    }
     if (MaterialsValue4 < 5.5 ) {
        pesok4 = 1700;
    }
     if (MaterialsValue4 < 5 ) {
        pesok4 = 1778;
    }
     if (MaterialsValue4 < 4.5 ) {
        pesok4 = 1875;
    }
    if (MaterialsValue4 < 4 ) {
        pesok4 = 2000;
    }
    if (MaterialsValue4 < 3.5 ) {
        pesok4 = 2100;
    }
    
    
    
    // Стоимость Укладка армирующей сетки
     if (Sstazh4 < 70 ) {
        armsetkawork4 = 70;
     }    
     else if (Sstazh4 < 150 ) {
        armsetkawork4 = 60;
     }   
     else if (Sstazh4 < 220 ) {
        armsetkawork4 = 50;
     }   
     else if (Sstazh4 < 500 ) {
        armsetkawork4 = 40;
     }  
     else if (Sstazh4 < 2000 ) {
        armsetkawork4 = 30;
     }   
     else if (Sstazh4 => 2000 ) {
        armsetkawork4 = 20;
     }   
    
    
    // Стоимость Укладка теплоизоляции
     if (Sstazh4 < 70 ) {
        teplozvukwork4 = 70;
     }    
     else if (Sstazh4 < 150 ) {
        teplozvukwork4 = 60;
     }   
     else if (Sstazh4 < 220 ) {
        teplozvukwork4 = 50;
     }   
     else if (Sstazh4 < 500 ) {
        teplozvukwork4 = 40;
     }  
     else if (Sstazh4 < 2000 ) {
        teplozvukwork4 = 30;
     }   
     else if (Sstazh4 => 2000 ) {
        teplozvukwork4 = 20;
     }   
    
    // Расчет количества доставок
    DeliveryValue4 = String(MaterialsValue4 * 5 / 50 + Sstazh4 / 350 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials4 = (MaterialsValue4 * pesok4 + MaterialsValue4 * 5 * cement + MaterialsValue4 * 1.5 * fibro + Sstazh4 * plenka * 1.1 + demlenta * Sstazh4 * 1.5 ) / MaterialsValue4 ;
    PriceMaterials4 = +PriceMaterials4.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials4 =  roundTo05(PriceMaterials4 * MaterialsValue4 + setkaarm * Sstazh4 * 1.1 + penopleks * Sstazh4 * 1.1) ;
    CostMaterials4 = +CostMaterials4.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh4 <= 70 && Sstazh4 <= 70) {
        CostWorks4 = ((Sstazh4 * pricework1) + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }  else if (TabStazh4 <= 70 && Sstazh4 <= 150) {
        CostWorks4 = ((Sstazh4 * pricework4)  + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }  else if (TabStazh4 <= 70 && Sstazh4 <= 220) {
        CostWorks4 = ((Sstazh4 * pricework7)  + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }  else if (TabStazh4 <= 70 && Sstazh4 > 220) {
        CostWorks4 = ((Sstazh4 * pricework10)  + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }
    if (TabStazh4 > 100 && Sstazh4 <= 70) {
        CostWorks4 = ((Sstazh4 * pricework3)  + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }  
        else if (TabStazh4 > 100 && Sstazh4 <= 150) {
        CostWorks4 = ((Sstazh4 * pricework6)  + (armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4));
    }   
        else if (TabStazh4 > 100 && Sstazh4 <= 220) {
        CostWorks4 = (Sstazh4 * pricework9)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }  
        else if (TabStazh4 > 100 && Sstazh4 > 220) {
        CostWorks4 = (Sstazh4 * pricework12)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }  
    if (TabStazh4 > 70 && Sstazh4 <= 70) {
        CostWorks4 = (Sstazh4 * pricework2)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }  
        else if (TabStazh4 > 70 && Sstazh4 <= 150) {
        CostWorks4 = (Sstazh4 * pricework5)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }  
        else if (TabStazh4 > 70 && Sstazh4 <= 220) {
        CostWorks4 = (Sstazh4 * pricework8)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }  
        else if (TabStazh4 > 70 && Sstazh4 > 220) {
        CostWorks4 = (Sstazh4 * pricework11)  + armsetkawork4 * Sstazh4 + teplozvukwork4 * Sstazh4;
    }     
   
    // Расчет наценки за этаж
    
    if (floor4 <= 3 ) {
        CostFloor4 = 0;
    } else if (floor4 > 3) {
        CostFloor4 = (( floor4 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice4 = CostMaterials4 + CostWorks4 + ServicePnevmo4 * RentDays4 + DeliveryValue4 * delivery ;
    
    // Расчет Клиентской стоимости
    
    
         ClientPrice4 = roundTo100(CostWorks4 * 2 + CostMaterials4 * 1.4 + CostFloor4 + ServicePnevmo4 * RentDays4 + delivery * DeliveryValue4);
         ClientPrice4 = +ClientPrice4.toFixed();
    
    
    
    
        
  
    jQuery("#ServicePnevmo4 span").html(ServicePnevmo4 + ' руб.');
    jQuery("#RentDays4 span").html(RentDays4 + ' руб.');
    jQuery("#MaterialsValue4 span").html(MaterialsValue4 + ' руб.');
    jQuery("#DeliveryValue4 span").html(DeliveryValue4 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials4 span").html(PriceMaterials4 + ' руб.');
    jQuery("#CostMaterials4 span").html(CostMaterials4 + ' руб.');
    jQuery("#CostWorks4 span").html(CostWorks4 + ' руб.');
    jQuery("#CostFloor4 span").html(CostFloor4 + ' руб.');
    jQuery("#SelfPrice4 span").html(SelfPrice4 + ' руб.');
    jQuery("#ClientPrice4 span").html(ClientPrice4 + ' руб.');
    jQuery("#pesok4 span").html(pesok4 + ' руб.');
    jQuery("#armsetkawork4 span").html(armsetkawork4 + ' руб.');
    jQuery("#teplozvukwork4 span").html(teplozvukwork4 + ' руб.');
    
    

  };
  
  $(document).on("input", "#Sstazh4", function() {
    Sstazh4 = +$(this).val();
    $("#Sstazh4").slider("value", Sstazh4);
    recount();
  });
  $(document).on("input", "#TabStazh4", function() {
    TabStazh4 = +$(this).val();
    $("#TabStazh4").slider("value", TabStazh4);
    recount();
  });
  $(document).on("input", "#floor4", function() {
    floor4 = +$(this).val();
    $("#floor4").slider("value", floor4);
    recount();
  });
});
$(function() {
  $("#Sstazh4").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh4').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh4").val($("#Sstazh4").slider("value"));
});

$(function() {
  $("#TabStazh4").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) { 
      $("#TabStazh4").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh4").val($("#TabStazh4").slider("value"));
});

$(function() {
  $("#floor4").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor4").val(ui.value).trigger("input");
    }
  });
  $("#floor4").val($("#floor4").slider("value"));
});




// КОНЕЦ Калькулятор 4 - СТЯЖКА ТЕПЛО-ЗВУКОИЗОЛЯЦИЯ




// НАЧАЛО Калькулятор 5 - СТЯЖКА ПО КЕРАМЗИТУ БЕЗ СЕТКИ



jQuery(function() {
  var 
    ServicePnevmo5 = 0,
    RentDays5 = 0,
    MaterialsValue5 = 0,
    DeliveryValue5 = 0,
    delivery = 1000,
    PriceMaterials5 = 0,
    TabStazh5 = 1,
    TabKeramzit5 = 1,
    Sstazh5 = 1, 
    floor5 = 0,
    CostMaterials5 = 0,
    CostWorks5 = 0,
    CostFloor5 = 0,
    SelfPrice5 = 0,
    ClientPrice5 = 0,
    pesok5 = 1,
    cement = 285,
    fibro = 260,
    plenka = 16,
    demlenta = 8,
    keramzit = 2000,
   
    keramzitpricework5 = 0,
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130; // Цена работы за 1 м2: больше 10 см, более 220 м2	

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh5 <= 250) {
        ServicePnevmo5 = 10000;
    } else if (Sstazh5 <= 1500) {
        ServicePnevmo5 = 8000;
    } else if (Sstazh5 <= 5000) {
        ServicePnevmo5 = 6000;
    } else if (Sstazh5 > 5000) {
        ServicePnevmo5 = 5000;
    }
    
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue5 = (TabStazh5 / 1000) * Sstazh5;
    MaterialsValue5 = roundTo5(MaterialsValue5);
    
     // Дни аренды
    
    if ((MaterialsValue5 / 15 ) < 1 ) {
        RentDays5 = 1; 
    } else if ((MaterialsValue5 / 15 ) >= 1)  { 
        RentDays5 = roundTo1(MaterialsValue5 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue5 => 25 ) {
        pesok5 = 1100;
     }    
     if (MaterialsValue5 < 20 ) {
        pesok5 = 1200;
    }   
     if (MaterialsValue5 < 15 ) {
        pesok5 = 1300;
    }   
     if (MaterialsValue5 < 10 ) {
        pesok5 = 1315;
    }
     if (MaterialsValue5 < 9.5 ) {
        pesok5 = 1389;
    }
    if (MaterialsValue5 < 9 ) {
        pesok5 = 1411.76;
    }
    if (MaterialsValue5 < 8.5 ) {
        pesok5 = 1437.5;
    }
    if (MaterialsValue5 < 8 ) {
        pesok5 = 1467;
    }
     if (MaterialsValue5 < 7.5 ) {
        pesok5 = 1500;
    }
     if (MaterialsValue5 < 7 ) {
        pesok5 = 1538;
    }
    if (MaterialsValue5 < 6.5 ) {
        pesok5 = 1583;
    }
    if (MaterialsValue5 < 6 ) {
        pesok5 = 1636.36;
    }
     if (MaterialsValue5 < 5.5 ) {
        pesok5 = 1700;
    }
     if (MaterialsValue5 < 5 ) {
        pesok5 = 1778;
    }
     if (MaterialsValue5 < 4.5 ) {
        pesok5 = 1875;
    }
    if (MaterialsValue5 < 4 ) {
        pesok5 = 2000;
    }
    if (MaterialsValue5 < 3.5 ) {
        pesok5 = 2100;
    }
    
    // Цены за присыпку и проливку
    
     if (TabKeramzit5 < 100 ) {
        keramzitpricework5 = 100;
     }    
     else if (TabKeramzit5 < 150 ) {
        keramzitpricework5 = 150;
     }   
     else if (TabKeramzit5 < 250 ) {
        keramzitpricework5 = 200;
     }   
     else if (TabKeramzit5 < 300 ) {
        keramzitpricework5 = 250;
     }  
     else if (TabKeramzit5 => 300 ) {
        keramzitpricework5 = 300;
     }   
    
    
    // Расчет количества доставок
    DeliveryValue5 = String(MaterialsValue5 * 5 / 50 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials5 = (MaterialsValue5 * pesok5 + MaterialsValue5 * 5 * cement + MaterialsValue5 * 1.5 * fibro + Sstazh5 * plenka * 1.1 + demlenta * Sstazh5 * 1.5 ) / MaterialsValue5 ;
    PriceMaterials = +PriceMaterials5.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials5 =  (PriceMaterials5 * MaterialsValue5 + (keramzit + cement) * TabKeramzit5 * Sstazh5 / 1000 ) ;
    CostMaterials5 = +CostMaterials5.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh5 <= 70 && Sstazh5 <= 70) {
        CostWorks5 = (Sstazh5 * pricework1) + keramzitpricework5 * Sstazh5;
    }  else if (TabStazh5 <= 70 && Sstazh5 <= 150) {
        CostWorks5 = (Sstazh5 * pricework4) + keramzitpricework5 * Sstazh5;
    }  else if (TabStazh5 <= 70 && Sstazh5 <= 220) {
        CostWorks5 = (Sstazh5 * pricework7) + keramzitpricework5 * Sstazh5;
    }  else if (TabStazh5 <= 70 && Sstazh5 > 220) {
        CostWorks5 = (Sstazh5 * pricework10) + keramzitpricework5 * Sstazh5;
    }
    if (TabStazh5 > 100 && Sstazh5 <= 70) {
        CostWorks5 = (Sstazh5 * pricework3) + keramzitpricework5 * Sstazh5;
    }  
        else if (TabStazh5 > 100 && Sstazh5 <= 150) {
        CostWorks5 = (Sstazh5 * pricework6) + keramzitpricework5 * Sstazh5;
    }   
        else if (TabStazh5 > 100 && Sstazh5 <= 220) {
        CostWorks5 = (Sstazh5 * pricework9) + keramzitpricework5 * Sstazh5;
    }  
        else if (TabStazh5 > 100 && Sstazh5 > 220) {
        CostWorks5 = (Sstazh5 * pricework12) + keramzitpricework5 * Sstazh5;
    }  
    if (TabStazh5 > 70 && Sstazh5 <= 70) {
        CostWorks5 = (Sstazh5 * pricework2)  + keramzitpricework5 * Sstazh5;
    }  
        else if (TabStazh5 > 70 && Sstazh5 <= 150) {
        CostWorks5 = (Sstazh5 * pricework5)  + keramzitpricework5 * Sstazh5;
    }  
        else if (TabStazh5 > 70 && Sstazh5 <= 220) {
        CostWorks5 = (Sstazh5 * pricework8) + keramzitpricework5 * Sstazh5;
    }  
        else if (TabStazh5 > 70 && Sstazh5 > 220) {
        CostWorks5 = (Sstazh5 * pricework11) + keramzitpricework5 * Sstazh5;
    }     
   
    // Расчет наценки за этаж
    
    if (floor5 <= 3 ) {
        CostFloor5 = 0;
    } else if (floor5 > 3) {
        CostFloor5 = (( floor5 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice5 = CostMaterials5 + CostWorks5 + ServicePnevmo5 * RentDays5 + DeliveryValue5 * delivery ;
    
    
    // Расчет Клиентской стоимости
    
 
    ClientPrice5 = roundTo100(CostWorks5 * 2 + CostMaterials5 * 1.4 + CostFloor5 + ServicePnevmo5 * RentDays5 + delivery * DeliveryValue5);
    ClientPrice5 = +ClientPrice5.toFixed();
 
    
    
    
   
   
        
    
    
        
   
    jQuery("#ServicePnevmo5 span").html(ServicePnevmo5 + ' руб.');
    jQuery("#RentDays5 span").html(RentDays5 + ' руб.');
    jQuery("#MaterialsValue5 span").html(MaterialsValue5 + ' руб.');
    jQuery("#DeliveryValue5 span").html(DeliveryValue5 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials5 span").html(PriceMaterials5 + ' руб.');
    jQuery("#CostMaterials5 span").html(CostMaterials5 + ' руб.');
    jQuery("#CostWorks5 span").html(CostWorks5 + ' руб.');
    jQuery("#CostFloor5 span").html(CostFloor5 + ' руб.');
    jQuery("#SelfPrice5 span").html(SelfPrice5 + ' руб.');
    jQuery("#ClientPrice5 span").html(ClientPrice5 + ' руб.');
    jQuery("#pesok5 span").html(pesok5 + ' руб.');
    

  };
  
  $(document).on("input", "#Sstazh5", function() {
    Sstazh5 = +$(this).val();
    $("#Sstazh5").slider("value", Sstazh5);
    recount();
  });
  $(document).on("input", "#TabStazh5", function() {
    TabStazh5 = +$(this).val();
    $("#TabStazh5").slider("value", TabStazh5);
    recount();
  });
  $(document).on("input", "#TabKeramzit5", function() {
    TabKeramzit5 = +$(this).val();
    $("#TabKeramzit5").slider("value", TabKeramzit5);
    recount();
  });
  $(document).on("input", "#floor5", function() {
    floor5 = +$(this).val();
    $("#floor5").slider("value", floor5);
    recount();
  });
});
$(function() {
  $("#Sstazh5").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh5').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh5").val($("#Sstazh5").slider("value"));
});

$(function() {
  $("#TabStazh5").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabStazh5").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh5").val($("#TabStazh5").slider("value"));
});

$(function() {
  $("#TabKeramzit5").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabKeramzit5").val(ui.value).trigger("input");
    }
  });
  $("#TabKeramzit5").val($("#TabKeramzit5").slider("value"));
});

$(function() {
  $("#floor5").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor5").val(ui.value).trigger("input");
    }
  });
  $("#floor5").val($("#floor5").slider("value"));
});






// КОНЕЦ Калькулятор 5 - СТЯЖКА КЕРАМЗИТОМ БЕЗ СЕТКИ



// НАЧАЛО Калькулятор 6 - СТЯЖКА КЕРАМЗИТОМ С СЕТКОЙ


jQuery(function() {
  var 
    ServicePnevmo6 = 0,
    RentDays6 = 0,
    MaterialsValue6 = 0,
    DeliveryValue6 = 0,
    delivery = 1000,
    PriceMaterials6 = 0,
    TabStazh6 = 1,
    TabKeramzit6 = 1,
    Sstazh6 = 1, 
    floor6 = 0,
    CostMaterials6 = 0,
    CostWorks6 = 0,
    CostFloor6 = 0,
    SelfPrice6 = 0,
    ClientPrice6 = 0,
    pesok6 = 1,
    cement = 285,
    fibro = 260,
    plenka = 16,
    demlenta = 8,
    keramzit = 2000,
    setkaarm = 65,
   
    keramzitpricework6 = 0,
    armsetkawork6 = 0,
   
    pricework1 = 170, // Цена работы за 1 м2: меньше 7 см, до 70 м2	
    pricework2 = 190, // Цена работы за 1 м2: меньше 10 см, до 70 м2	
    pricework3 = 210, // Цена работы за 1 м2: больше 10 см, до 70 м2	
    pricework4 = 130, // Цена работы за 1 м2: меньше 7 см, до 150 м2	
    pricework5 = 150, // Цена работы за 1 м2: меньше 10 см, до 150 м2	
    pricework6 = 170, // Цена работы за 1 м2: больше 10 см, до 150 м2	
    pricework7 = 120, // Цена работы за 1 м2: меньше 7 см, до 220 м2	 
    pricework8 = 140, // Цена работы за 1 м2: меньше 10 см, до 220 м2	
    pricework9 = 160, // Цена работы за 1 м2: больше 10 см, до 220 м2		
    pricework10 = 100, // Цена работы за 1 м2: меньше 7 см, более 220 м2	
    pricework11 = 120, // Цена работы за 1 м2: меньше 10 см, более 220 м2	
    pricework12 = 130; // Цена работы за 1 м2: больше 10 см, более 220 м2	

// НАЧАЛО РАСЧЕТОВ




  function recount() {
   // Расчет обслуживания пневмонагнетателя
   
    if (Sstazh6 <= 250) {
        ServicePnevmo6 = 10000;
    } else if (Sstazh6 <= 1500) {
        ServicePnevmo6 = 8000;
    } else if (Sstazh6 <= 5000) {
        ServicePnevmo6 = 6000;
    } else if (Sstazh6 > 5000) {
        ServicePnevmo6 = 5000;
    }
    
   
    
    // Доставка
    
    delivery = 1000;
    
    // Расчет потребного кол-ва материалов 
    
    MaterialsValue6 = (TabStazh6 / 1000) * Sstazh6;
    MaterialsValue6 = roundTo5(MaterialsValue6);
    
     // Дни аренды
    
    if ((MaterialsValue6 / 15 ) < 1 ) {
        RentDays6 = 1; 
    } else if ((MaterialsValue6 / 15 ) >= 1)  { 
        RentDays6 = roundTo1(MaterialsValue6 / 15) ;
    }
    
    // Песок расчет    
     
     if (MaterialsValue6 => 25 ) {
        pesok6 = 1100;
     }    
     if (MaterialsValue6 < 20 ) {
        pesok6 = 1200;
    }   
     if (MaterialsValue6 < 15 ) {
        pesok6 = 1300;
    }   
     if (MaterialsValue6 < 10 ) {
        pesok6 = 1315;
    }
     if (MaterialsValue6 < 9.5 ) {
        pesok6 = 1389;
    }
    if (MaterialsValue6 < 9 ) {
        pesok6 = 1411.76;
    }
    if (MaterialsValue6 < 8.5 ) {
        pesok6 = 1437.5;
    }
    if (MaterialsValue6 < 8 ) {
        pesok6 = 1467;
    }
     if (MaterialsValue6 < 7.5 ) {
        pesok6 = 1500;
    }
     if (MaterialsValue6 < 7 ) {
        pesok6 = 1538;
    }
    if (MaterialsValue6 < 6.5 ) {
        pesok6 = 1583;
    }
    if (MaterialsValue6 < 6 ) {
        pesok6 = 1636.36;
    }
     if (MaterialsValue6 < 5.5 ) {
        pesok6 = 1700;
    }
     if (MaterialsValue6 < 5 ) {
        pesok6 = 1778;
    }
     if (MaterialsValue6 < 4.5 ) {
        pesok6 = 1875;
    }
    if (MaterialsValue6 < 4 ) {
        pesok6 = 2000;
    }
    if (MaterialsValue6 < 3.5 ) {
        pesok6 = 2100;
    }
    
    // Расчет сетки
    
    if (TabStazh6 < 70 ) {
        armsetkawork6 = 70;
     }    
     else if (TabStazh6 < 150 ) {
        armsetkawork6 = 60;
     }   
     else if (TabStazh6 < 220 ) {
        armsetkawork6 = 50;
     }   
     else if (TabStazh6 < 500 ) {
        armsetkawork6 = 40;
     }  
     else if (TabStazh6 < 2000 ) {
        armsetkawork6 = 30;
     }   
     else if (TabStazh6 => 2000 ) {
        armsetkawork6 = 20;
     }   
    
    
    
    // Цены за присыпку и проливку
    
     if (TabKeramzit6 < 100 ) {
        keramzitpricework6 = 100;
     }    
     else if (TabKeramzit6 < 150 ) {
        keramzitpricework6 = 150;
     }   
     else if (TabKeramzit6 < 250 ) {
        keramzitpricework6 = 200;
     }   
     else if (TabKeramzit6 < 300 ) {
        keramzitpricework6 = 250;
     }  
     else if (TabKeramzit6 => 300 ) {
        keramzitpricework6 = 300;
     }   
    
    
    
    // Расчет количества доставок
    DeliveryValue6 = String(MaterialsValue6 * 5 / 50 ).replace(/\.0*$/, "").replace(/(\d?)(9*)\..*$/, function(m,d,n) { return ~~d+1+n.replace(/9/g,0) }) ;//-> "-1";
    // Расчет стоимости цены материалов за 1 кв м
    PriceMaterials6 = (MaterialsValue6 * pesok6 + MaterialsValue6 * 5 * cement + MaterialsValue6 * 1.5 * fibro + Sstazh6 * plenka * 1.1 + demlenta * Sstazh6 * 1.5 ) / MaterialsValue6 ;
    PriceMaterials6 = +PriceMaterials6.toFixed(2);

    // Расчет стоимости материалов
    CostMaterials6 =  (PriceMaterials6 * MaterialsValue6 + (keramzit + cement) * TabKeramzit6 * Sstazh6 / 1000 + setkaarm * Sstazh6 * 1.1) ;
    CostMaterials6 = +CostMaterials6.toFixed(2);
   
    // Расчет стоимости работ
    
    if (TabStazh6 <= 70 && Sstazh6 <= 70) {
        CostWorks6 = (Sstazh6 * pricework1) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  else if (TabStazh6 <= 70 && Sstazh6 <= 150) {
        CostWorks6 = (Sstazh6 * pricework4) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  else if (TabStazh6 <= 70 && Sstazh6 <= 220) {
        CostWorks6 = (Sstazh6 * pricework7) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  else if (TabStazh6 <= 70 && Sstazh6 > 220) {
        CostWorks6 = (Sstazh6 * pricework10) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }
    if (TabStazh6 > 100 && Sstazh6 <= 70) {
        CostWorks6 = (Sstazh6 * pricework3) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
        else if (TabStazh6 > 100 && Sstazh6 <= 150) {
        CostWorks6 = (Sstazh6 * pricework6) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }   
        else if (TabStazh6 > 100 && Sstazh6 <= 220) {
        CostWorks6 = (Sstazh6 * pricework9) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
        else if (TabStazh6 > 100 && Sstazh6 > 220) {
        CostWorks6 = (Sstazh6 * pricework12) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
    if (TabStazh6 > 70 && Sstazh6 <= 70) {
        CostWorks6 = (Sstazh6 * pricework2)  + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
        else if (TabStazh6 > 70 && Sstazh6 <= 150) {
        CostWorks6 = (Sstazh6 * pricework5)  + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
        else if (TabStazh6 > 70 && Sstazh6 <= 220) {
        CostWorks6 = (Sstazh6 * pricework8) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }  
        else if (TabStazh6 > 70 && Sstazh6 > 220) {
        CostWorks6 = (Sstazh6 * pricework11) + keramzitpricework6 * Sstazh6 + armsetkawork6 * Sstazh6;
    }     
   
    // Расчет наценки за этаж
    
    if (floor6 <= 3 ) {
        CostFloor6 = 0;
    } else if (floor6 > 3) {
        CostFloor6 = (( floor6 - 3) * 200);
    }
    
    //  Расчет Себестоимости
    SelfPrice6 = CostMaterials6 + CostWorks6 + ServicePnevmo6 * RentDays6 + DeliveryValue6 * delivery ;
    
    // Расчет Клиентской стоимости
    
   
   
    ClientPrice6 = roundTo100(CostWorks6 * 2 + CostMaterials6 * 1.4 + CostFloor6 + ServicePnevmo6 * RentDays6 + delivery * DeliveryValue6);
    ClientPrice6 = +ClientPrice6.toFixed();
 
    
    jQuery("#ServicePnevmo6 span").html(ServicePnevmo6 + ' руб.');
    jQuery("#RentDays6 span").html(RentDays6 + ' руб.');
    jQuery("#MaterialsValue6 span").html(MaterialsValue6 + ' руб.');
    jQuery("#DeliveryValue6 span").html(DeliveryValue6 + ' руб.');
    jQuery("#delivery span").html(delivery + ' руб.');
    jQuery("#PriceMaterials6 span").html(PriceMaterials6 + ' руб.');
    jQuery("#CostMaterials6 span").html(CostMaterials6 + ' руб.');
    jQuery("#CostWorks6 span").html(CostWorks6 + ' руб.');
    jQuery("#CostFloor6 span").html(CostFloor6 + ' руб.');
    jQuery("#SelfPrice6 span").html(SelfPrice6 + ' руб.');
    jQuery("#ClientPrice6 span").html(ClientPrice6 + ' руб.');
    jQuery("#pesok6 span").html(pesok6 + ' руб.');
     jQuery("#keramzitwork6 span").html(keramzitpricework6 + ' руб.');
    jQuery("#armsetkawork6 span").html(armsetkawork6 + ' руб.');
    

  };

  $(document).on("input", "#Sstazh6", function() {
    Sstazh6 = +$(this).val();
    $("#Sstazh6").slider("value", Sstazh6);
    recount();
  });
  $(document).on("input", "#TabStazh6", function() {
    TabStazh6 = +$(this).val();
    $("#TabStazh6").slider("value", TabStazh6);
    recount();
  });
  $(document).on("input", "#TabKeramzit6", function() {
    TabKeramzit6 = +$(this).val();
    $("#TabKeramzit6").slider("value", TabKeramzit6);
    recount();
  });
  $(document).on("input", "#floor6", function() {
    floor6 = +$(this).val();
    $("#floor6").slider("value", floor6);
    recount();
  });
});
$(function() {
  $("#Sstazh6").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 999,
    slide: function(event, ui) {
      $('#Sstazh6').val(ui.value).trigger("input");
    }
  });
  $("#Sstazh6").val($("#Sstazh6").slider("value"));
});

$(function() {
  $("#TabStazh6").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabStazh6").val(ui.value).trigger("input");
    }
  });
  $("#TabStazh6").val($("#TabStazh6").slider("value"));
});

$(function() {
  $("#TabKeramzit6").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 150,
    slide: function(event, ui) {
      $("#TabKeramzit6").val(ui.value).trigger("input");
    }
  });
  $("#TabKeramzit6").val($("#TabKeramzit6").slider("value"));
});

$(function() {
  $("#floor6").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 500000,
    slide: function(event, ui) {
      $("#floor6").val(ui.value).trigger("input");
    }
  });
  $("#floor6").val($("#floor6").slider("value"));
});



// КОНЕЦ Калькулятор 6 - СТЯЖКА КЕРАМЗИТОМ С СЕТКОЙ





// Замыкание
(function() {
  /**
   * Корректировка округления десятичных дробей.
   *
   * @param {String}  type  Тип корректировки.
   * @param {Number}  value Число.
   * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
   * @returns {Number} Скорректированное значение.
   */
  function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Десятичное округление к ближайшему
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Десятичное округление вниз
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Десятичное округление вверх
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

function roundTo5(num) {
    return Math.ceil(num/0.1)*0.1;
}

function roundTo1(num) {
    return Math.round(num/1)*1;
}

function roundTo05(num) {
    return Math.round(num/0.5)*0.5;
}
function roundTo100(num) {
    return Math.round(num/100)*100;
}

function gaussRound(num, decimalPlaces) {
    let d = decimalPlaces || 0,
    m = Math.pow(10, d),
    n = +(d ? num * m : num).toFixed(8),
    i = Math.floor(n), f = n - i,
    e = 1e-8,
    r = (f > 0.5 - e && f < 0.5 + e) ?
		((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}

//  Округление до 10
function fn(arr, num) {
  return arr.map(function(a) {
    return a % num ? a + num - a % num : a
  })
};

function round2(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}



