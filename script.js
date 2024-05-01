let cookies=0,cookiesPerSecond=0,totalCookies=0,facilities={受験生祖父:0,SOFTGAMES608:0,いつき:0,すばる:0,うどん:0,そふとコーポレーション:0,いるかスタジオ:0,NIGATENDO:0,そらみコーポレーション:0,ロボいつき:0,Jasper8se:0,"Rito Games":0,"SPIC Games":0,NITENDO:0},facilityPrices={受験生祖父:10,SOFTGAMES608:20,いつき:30,すばる:50,うどん:80,そふとコーポレーション:120,いるかスタジオ:160,NIGATENDO:210,そらみコーポレーション:260,ロボいつき:320,Jasper8se:390,"Rito Games":460,"SPIC Games":660,NITENDO:720};const facilityCookieProduction={受験生祖父:1,SOFTGAMES608:2,いつき:3,すばる:5,うどん:7,そふとコーポレーション:12,いるかスタジオ:15,NIGATENDO:18,そらみコーポレーション:28,ロボいつき:35,Jasper8se:48,"Rito Games":60,"SPIC Games":78,NITENDO:86},initialFacilityPrices={受験生祖父:10,SOFTGAMES608:20,いつき:30,すばる:50,うどん:80,そふとコーポレーション:120,いるかスタジオ:160,NIGATENDO:210,そらみコーポレーション:260,ロボいつき:320,Jasper8se:390,"Rito Games":460,"SPIC Games":660,NITENDO:720};let clickMultiplier=1.05,clickRateIncreasePrice=10;const clickSound=new Audio("https://media.masiyu.jp/masi/3cmHcgB6OSa");function clickCookie(){cookies+=clickMultiplier,totalCookies+=clickMultiplier,updateCookieDisplay(),clickSound.currentTime=0,clickSound.play(),saveGameState()}function updateCookieDisplay(){let e=document.getElementById("cookieCount");e&&(e.textContent=Math.floor(cookies));let i=document.getElementById("totalCookies");i&&(i.textContent="総ふじい: "+Math.floor(totalCookies))}updateFacilityPrices(),updateFacilityDisplay(),setInterval(saveGameState,0),loadGameState();const totalCookiesDisplay=document.getElementById("totalCookies");if(totalCookiesDisplay){let e=calculateTotalCookies();totalCookiesDisplay.innerHTML=`総ふじい: ${e} ふじい`}function saveGameState(){let e={cookies:cookies,facilityPrices:facilityPrices,facilities:facilities,cookiesPerSecond:cookiesPerSecond};localStorage.setItem("gameState",JSON.stringify(e))}function loadGameState(){let e=localStorage.getItem("gameState");if(e){let i=JSON.parse(e);cookies=i.cookies,facilityPrices=i.facilityPrices,facilities=i.facilities,cookiesPerSecond=i.cookiesPerSecond}else facilityPrices=Object.assign({},initialFacilityPrices);updateCookieDisplay(),updateCookieProductionDisplay()}function updateCookieProductionDisplay(){let e=document.getElementById("perSecond");e&&(e.innerHTML=cookiesPerSecond+" ふじい/秒")}function updateFacilityPrices(){for(let e in facilityPrices)facilityPrices[e]=Math.ceil(initialFacilityPrices[e]*Math.pow(1.1,facilities[e]))}function updateFacilityDisplay(){let e=document.getElementById("facilityList");if(e)for(let i in e.innerHTML="",facilities){let t=document.createElement("li"),o=document.createElement("button");o.textContent=`${i} - ${facilities[i]} 個 (価格: ${facilityPrices[i]} ふじい)`,o.addEventListener("click",function(){buyFacility(i)}),t.appendChild(o),e.appendChild(t)}}function buyFacility(e){cookies>=facilityPrices[e]?(cookies-=facilityPrices[e],facilities[e]++,cookiesPerSecond+=facilityCookieProduction[e],updateCookieDisplay(),updateFacilityPrices(),updateFacilityDisplay(),updateCookieProductionDisplay()):alert("クッキーが足りません！")}function resetGameState(){confirm("ゲームの進行状況をリセットします。よろしいですか？")&&(localStorage.removeItem("gameState"),cookies=0,facilityPrices=Object.assign({},initialFacilityPrices),facilities={受験生祖父:0,SOFTGAMES608:0,いつき:0,すばる:0,うどん:0,そふとコーポレーション:0,いるかスタジオ:0,NIGATENDO:0,そらみコーポレーション:0,ロボいつき:0,Jasper8se:0,"Rito Games":0,"SPIC Games":0,NITENDO:0},clickMultiplier=1,totalCookies=0,cookiesPerSecond=0,clickRateIncreasePrice=10,updateCookieDisplay(),updateFacilityPrices(),updateFacilityDisplay(),updateCookieProductionDisplay())}setInterval(function(){cookies+=cookiesPerSecond,totalCookies+=cookiesPerSecond,updateCookieDisplay(),saveTotalCookies()},1e3);const resetButton=document.getElementById("resetButton");function calculateTotalCookies(){let e=cookies;for(let i in facilities)e+=facilities[i]*facilityCookieProduction[i];for(let t in facilityPrices){let o=facilityPrices[t],c=facilities[t];e+=o*c}return e}function increaseClickRate(){cookies>=clickRateIncreasePrice?(cookies-=clickRateIncreasePrice,clickMultiplier++,clickRateIncreasePrice*=3,updateCookieDisplay(),updateIncreaseClickRateButton(),updateFacilityDisplay()):alert("ふじいが足りません！")}function updateIncreaseClickRateButton(){let e=document.getElementById("increaseClickRateButton");e&&(e.textContent=`クリックの倍率を増加 (価格: ${clickRateIncreasePrice} ふじい)`)}function applyFacilityEffects(){for(let e in facilities)totalCookies+=facilities[e]*facilityCookieProduction[e]}function loadTotalCookies(){let e=localStorage.getItem("totalCookies");null!==e&&(totalCookies=parseFloat(e))}function saveTotalCookies(){localStorage.setItem("totalCookies",totalCookies.toString())}resetButton.addEventListener("click",resetGameState),document.addEventListener("click",function(e){let i=document.createElement("div");i.classList.add("cookie"),i.style.left=e.clientX+"px",i.style.top=e.clientY+"px",document.body.appendChild(i),setTimeout(function(){i.remove()},3e3)}),loadTotalCookies();
