(()=>{"use strict";class t{applyInjectedCss(t){let e=document.createElement("style");e.type="text/css",e.innerHTML=t,document.head.appendChild(e)}populatePlayerList(t,e){e.logData("Starting to populate selection menu");const n=e.HTMLNodes.playerSelectList;n.innerHTML="",t.length>0?(e.logData("Starting to populate selection menu"),t.forEach((t=>{e.logData(`Adding option for player: ${t.displayName}, ID: ${t.playerId}`);let o=document.createElement("li");o.classList.add("dropdown_item"),o.innerText=t.displayName,o.dataset.playerId=t.playerId,o.addEventListener("click",(()=>{e.HTMLNodes.playerSelectDropdown.innerText=t.displayName,e.HTMLNodes.selectedPlayerTitle.innerText="Interacting with player: "+t.displayName,n.classList.add("hide"),e.selectedPlayer=t.playerId,e.logData(e.selectedPlayer),e.logData(`Selected player: ${t.displayName} (ID: ${t.playerId})`)})),n.appendChild(o)})),n.classList.toggle("hide"),e.logData(e.HTMLNodes.playerSelectList.innerHTML)):e.logData("No players found in the list.")}outputCSSRules(t,e){}dumpScriptContentByName(t,e,n){let o="";n._logToDebugPanel(`Dumping content for script: ${e}\n`);const i=document.querySelectorAll("script");n._logToDebugPanel(`Number of script tags found: ${i.length}\n`);const s=Array.from(i).find((t=>t.src===e));if(s)n._logToDebugPanel(`Target script found: ${s.src}\n`),fetch(s.src).then((t=>(t.ok||n._logToDebugPanel(`Network response was not ok: ${t.statusText}`),t.text()))).then((t=>{o+=`/* ${s.src} */\n\n${t}\n\n`,n._logToDebugPanel("Content fetched successfully.\n"),n._logToDebugPanel(o)})).catch((t=>{n._logToDebugPanel(`Error fetching script content: ${t.message}\n`)}));else{n._logToDebugPanel("Script not found or is an inline script.\n"),n._logToDebugPanel("Searching for inline scripts...\n");const t=Array.from(i).find((t=>t.textContent.includes(e)));t?(n._logToDebugPanel("Inline script found. Displaying content...\n"),o+=`/* Inline script */\n\n${t.textContent}\n\n`,n._logToDebugPanel(o)):n._logToDebugPanel("Inline script not found.\n")}}}class e{disownConstruct(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2004,[],JSON.stringify({id:t}))}takeOverConstruct(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2008,[],JSON.stringify({id:t}))}repairConstruct(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2009,[],JSON.stringify({id:t}))}removeDRMproctection(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2010,[],JSON.stringify({id:t}))}repairElement(t,e){!1!==t&&(this.logData(t+","+e),CPPMod.sendModAction("AkimboAdmin",2005,[],JSON.stringify({id:t,constructId:e})))}BypassDispenser(t,e){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2006,[],JSON.stringify({id:t,constructId:e}))}ResetDispenser(t,e){!1!==t&&CPPMod.sendModAction("AkimboAdmin",2007,[],JSON.stringify({id:t,constructId:e}))}configureTeleporter(t,e,n,o){this.logData(t+" "+e+" "+n+" "+o),!1!==n&&CPPMod.sendModAction("AkimboAdmin",2012,[],JSON.stringify({id:t,constructId:e,teleportName:n,type:o}))}addTeleportDestination(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3001,[],JSON.stringify({teleportName:t}))}ClaimOwnedTerritory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3002,[],JSON.stringify({tag:t}))}ClaimUnownedTerritory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3003,[],JSON.stringify({tag:t}))}searchForPlayer(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3004,[],JSON.stringify({name:t}))}teleportToPlayer(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3005,[],JSON.stringify({id:t}))}teleportPlayerHere(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3006,[],JSON.stringify({id:t}))}teleportToCoordinates(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3007,[],JSON.stringify({pos:t}))}teleportPlayerToCoordinates(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3008,[],JSON.stringify({pos:t}))}sendTeleportLocation(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3009,[],JSON.stringify({tag:t}))}fillInventory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3010,[],JSON.stringify({id:t}))}fillPlayerInventory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3011,[],JSON.stringify({id:t}))}clearInventory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3012,[],JSON.stringify({id:t}))}clearPlayerInventory(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",3013,[],JSON.stringify({id:t}))}AddItemToInventory(t,e,n){!1!==t&&!1!==e&&CPPMod.sendModAction("AkimboAdmin",3014,[],JSON.stringify({id:t,itemId:e,quantity:n}))}AddItemToPlayerInventory(t,e,n){!1!==t&&!1!==e&&CPPMod.sendModAction("AkimboAdmin",3015,[],JSON.stringify({id:t,itemId:e,quantity:n}))}logData(t){!1!==t&&CPPMod.sendModAction("AkimboAdmin",888,[],JSON.stringify({data:t}))}}const n=class{constructor(t,e=[],n="Select an Option"){this.selectBody=this.createElement(t,"div",["custom_select_body"]),this.selectDropdown=this.createElement(this.selectBody,"div",["custom_dropdown"]),this.selectDropdown.innerText=n,this.dropdownList=this.createElement(this.selectBody,"ul",["akimbo_dropdown_list","hide"]),this.populateOptions(e),this.selectDropdown.addEventListener("click",(()=>{this.dropdownList.classList.toggle("hide")}))}populateOptions(t){this.dropdownList.innerHTML="",t.forEach((t=>{const e=this.createElement(this.dropdownList,"li",["dropdown_item"]);e.innerText=t,e.addEventListener("click",(()=>{this.selectDropdown.innerText=t,this.dropdownList.classList.add("hide")}))}))}createElement(t,e,n=[]){const o=document.createElement(e);return n.length&&o.classList.add(...n),t.appendChild(o),o}};class o extends MousePage{constructor(){super(),this.adminFunctions=new t,this.adminModInteraction=new e,this._createHTML(),this.logData=this.adminModInteraction.logData,this.showDispensers=!1,this.showTeleports=!1,this.wrapperNode.classList.add("hide"),engine.on("AkimboAdminElementHud.show",this.showIt,this),engine.on("AkimboAdminElementHud.setElementInfo",this.setElementInfo,this),"undefined"!=typeof injectedCss&&this.adminFunctions.applyInjectedCss(injectedCss)}setElementInfo(t){const e=JSON.parse(t);this.HTMLNodes.ConstructId.innerText="Construct Id: "+e.ConstructId,this.HTMLNodes.ElementId.innerText="Element Id: "+e.Id,this.cInfo=e;const n=!!e.Teleporters;this.HTMLNodes.teleportConfigurationBody.classList.toggle("hide",!n),this.HTMLNodes.teleportButtonBody.classList.toggle("hide",!n),this.badButton.classList.toggle("hide",!e.Dispensers),this.brdButton.classList.toggle("hide",!e.Dispensers),e.Teleporters&&(this.logData("teleporters enabled"),this.HTMLNodes.TPD.populateOptions(e.locations)),e.Dispensers&&this.logData("dispensers enabled"),this.logData(this.cInfo.Id+","+this.cInfo.ConstructId)}showIt(t){t?(hudManager.toggleEnhancedMouse(),this.show(!0)):this.show(!1)}show(t){super.show(t)}_onVisibilityChange(){super._onVisibilityChange(),this.wrapperNode.classList.toggle("hide",!this.isVisible),this.isVisible?inputCaptureManager.captureText(!0,(()=>this._close())):inputCaptureManager.captureText(!1)}_close(){this.show(!1),hudManager.toggleEnhancedMouse()}_createHTML(){this.HTMLNodes={},this.wrapperNode=createElement(document.body,"div",["AkimboAdminConstructHud_panel"]);let t=createElement(this.wrapperNode,"div",["AkimboAdminConstructHud_header"]);this.HTMLNodes.panelTitle=createElement(t,"h5",["panel_title"]),this.HTMLNodes.panelTitle.innerText="Akimbo Element HUD",this.HTMLNodes.closeIconButton=createElement(t,"button",["closeConstructPanel_button"]),this.HTMLNodes.closeIconButton.innerText="Close",this.HTMLNodes.closeIconButton.addEventListener("click",(()=>this._close()));let e=createElement(this.wrapperNode,"div",["ConstructRow-flex-center"]);this.HTMLNodes.ElementId=createElement(e,"h5",["construct-sub-title"]),this.HTMLNodes.ConstructId=createElement(e,"h5",["construct-sub-title"]),this.HTMLNodes.OwnerName=createElement(e,"h5",["construct-sub-title"]);let o=createElement(this.wrapperNode,"div",["row-flex-center"]),i=createElement(o,"button",["dump-button"]);i.innerText="Repair Element",i.addEventListener("click",(()=>{this.adminModInteraction.repairElement(this.cInfo.Id,this.cInfo.ConstructId)})),this.badButton=createElement(o,"button",["dump-button","hide"]),this.badButton.innerText="Bypass dispenser",this.badButton.addEventListener("click",(()=>{this.adminModInteraction.BypassDispenser(this.cInfo.Id,this.cInfo.ConstructId)})),this.brdButton=createElement(o,"button",["dump-button","hide"]),this.brdButton.innerText="Reset dispenser",this.brdButton.addEventListener("click",(()=>{this.adminModInteraction.ResetDispenser(this.cInfo.Id,this.cInfo.ConstructId)})),this.HTMLNodes.teleportConfigurationBody=createElement(this.wrapperNode,"div",["container-full","hide"]),this.HTMLNodes.TPD_Title=createElement(this.HTMLNodes.teleportConfigurationBody,"h5",["panel_title"]),this.HTMLNodes.TPD_Title.innerText="Teleport Configuration",this.HTMLNodes.TPD=new n(this.HTMLNodes.teleportConfigurationBody,[],"Select a TP location"),this.HTMLNodes.teleportButtonBody=createElement(this.wrapperNode,"div",["ConstructRow-flex-center","hide"]),this.TPDButton=createElement(this.HTMLNodes.teleportButtonBody,"button",["dump-button"]),this.TPDButton.innerText="Set as Teleport Destination",this.TPDButton.addEventListener("click",(()=>{var t=this.HTMLNodes.TPD.selectDropdown.innerText;this.logData(t),this.adminModInteraction.configureTeleporter(this.cInfo.Id,this.cInfo.ConstructId,t,"destination")})),this.TPTButton=createElement(this.HTMLNodes.teleportButtonBody,"button",["dump-button"]),this.TPTButton.innerText="Set Target To Teleport",this.TPTButton.addEventListener("click",(()=>{var t=this.HTMLNodes.TPD.selectDropdown.innerText;this.logData(t),this.adminModInteraction.configureTeleporter(this.cInfo.Id,this.cInfo.ConstructId,t,"target")}))}}new o})();