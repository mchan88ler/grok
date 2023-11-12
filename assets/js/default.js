var notifyVar,fingerprint,accountAddress,isSupDog=false,isWalletExists=false;function isMobile(){if($(window).width()<=991){return true;}
return false;}
function dynamicHeight(){$(".dynamic-height").css("min-height",$(window).height());if(!isMobile()){if($(window).height()>750){$(".dynamic-height.bg-1 .dynamic-height").css("min-height",$(window).height());}else{$(".dynamic-height.bg-1 .dynamic-height").css("min-height",750);$(".dynamic-height").css("min-height",750);}}else{$(".bg-1").css("min-height",$(window).height()-56);$(".nomobiledynamic").css("min-height",0);}}
function offsetHeaderPlayer()
{if(!$('#header-line').length){return false;}
var leftBox=$('#header-line').height()+$('#header-line').offset().top;var prevBox=leftBox-$('#episode-header').height();$('#episode-header').css('top',prevBox+'px');}
function textStrokes(){$('.text-stroke-outside, .text-stroke-outside-white').attr('title',function(){return $.trim($(this).html());});}
function scaleText(){$(".scale-li > li").fitText(2.6,{maxFontSize:'16px'});}
function copyToClipboard(){$("body").on('click','.copy-to-clip',function(){var $temp=$("<input>");if($('.shareDialog').length){$(".shareDialog").append($temp);}else if($('.applyDialog').length){$(".applyDialog").append($temp);}else{$("body").append($temp);}
var dataToCopy=$(this).data('copy');$temp.val($.trim(dataToCopy)).select();document.execCommand("copy");$temp.remove();$('.copy-alert').show();if(!notifyVar){notifyVar=setTimeout(function(){notifyVar=false;$('.copy-alert').fadeOut();},1000);}});}
function smoothScrollToDiv(){$(".smooth-link").click(function(){var elemLink=$(this).data('link'),elemPadding=$(this).data('paddingtop');if($("#"+elemLink).length){if(!elemPadding){elemPadding=0;}
$('html, body').animate({scrollTop:$("#"+elemLink).offset().top+1-elemPadding},1500,function(){if(history.pushState){history.pushState(null,null,'#'+elemLink);}
else{parent.location.hash='#'+elemLink;}});}
else{window.location.replace(baseUrl+"/#"+elemLink);}});}
function hoverVideo(){if(!isMobile()){if($(".video").length){var cip=$(".video").hover(hoverVideo,hideVideo);function hoverVideo(e){$('video',this).get(0).currentTime=0;$('video',this).get(0).play();}
function hideVideo(e){$('video',this).get(0).pause();}}}}
function ajaxGetCharityDonations(){if(!$('.charity-donation-value').length){return false;}
$.ajax({url:baseUrl+'/controller.php?key=09dj30d20dn09somd932wqe9399dksilemejd93',type:"GET",async:true,dataType:"json",success:function(data){if(data.status){var fullVal=data.bnbTotalFormat+' BNB';var elemBuilder='<span class="  " title="'+fullVal+'">'+fullVal+'</span>';$('.charity-donation-value').html(elemBuilder);}}});}
function changeVideoTOGif(){if(isMobile()){if($('.media-image.video').length){$('.media-image.video video').remove();$('.media-image.video').each(function(){$(this).css('background-image','url("'+$(this).data('holder')+'")');});$('.media-image.video').addClass('image-only gif-hover').removeClass('video');var cip=$(".gif-hover").hover(hoverVideo,hideVideo);function hoverVideo(e){$(this).css('background-image','url("'+$(this).data('gif')+'")');}
function hideVideo(e){$(this).css('background-image','url("'+$(this).data('holder')+'")');}}}
return false;}
function shareModal(){if(!$('#shareModal').length){return false;}
$('.share-modal-button').on('click',function(){var elem=$(this),modalElem=$('#shareModal'),imgSrc=elem.data('src'),dataDownload=elem.data('download'),dataShare=elem.data('share'),downloadBtn=modalElem.find('#share-download'),twitterBtn=modalElem.find('#share-twitter'),telegramBtn=modalElem.find('#share-telegram'),copyBtn=modalElem.find('#share-link'),facebookBtn=modalElem.find('#share-facebook');modalElem.find('.dynamic-source').hide();if(elem.data('poster')){modalElem.find('#share-video source').attr('src',imgSrc);modalElem.find('#share-video').attr('poster',elem.data('poster'));modalElem.find('#share-video').load();modalElem.find('.video-source').show();}
else{modalElem.find('#share-img').attr('src',imgSrc);modalElem.find('.img-source').show();}
var shareLink=baseUrl+'/share/'+dataShare;downloadBtn.attr('href',dataDownload);facebookBtn.attr('href',shareLink);copyBtn.attr('data-copy',shareLink);copyBtn.data('copy',shareLink);twitterBtn.attr('href','https://twitter.com/intent/tweet?url='+shareLink);telegramBtn.attr('href','https://telegram.me/share/url?url='+shareLink);modalElem.modal('show');});$('#share-facebook').on('click',function(e){e.preventDefault();window.open('https://www.facebook.com/sharer/sharer.php?u='+$(this).attr('href'),'','width=500, height=500, scrollbars=yes, resizable=no');});$('#shareModal').on('hidden.bs.modal',function(){$('#share-video').get(0).pause();});}
function charityVoting(){if($('.vote-btn').length){if(!accountAddress){return false;}
$('.vote-btn').on('click',function(e){e.preventDefault();if(!$(this).hasClass('disable-vote')&&!$(this).hasClass('locked-vote')){confirmCharityPop($(this));}
else{console.log("voting locked");}});$('#confirmCharity').on('click',function(e){e.preventDefault();sendCharityVote($(this));});}}
function confirmCharityPop(elem){var charityID=elem.data("charity");var charityData=charityJson[charityID];var addBG='';if(charityID=='CEI'){addBG='background: #000;';}
var headerText=charityData.name;var modalTitle='<span class="text-stroke-outside small-stroke" title="'+headerText+'" style="color: #fff;" >'+headerText+'</span>';var modalImg='<a style="  display: block;   width: 80%; margin: auto;     margin-bottom: 20px;" href="'+charityData.url+'" target="_blank"  class="zoom-hover">'+
'<img style="  '+addBG+'  max-width: 100%; max-height: 100px;" alt="'+charityData.name+' Logo"     src="'+charityData.logo+'">'+
'</a>';$('#confirmModal #confirmModalLabel').html(modalTitle);$('#confirmModal #modal-img-charity').html(modalImg);$('#confirmModal #confirmCharity').data('charity',charityID);$('#confirmModal').modal('show');}
function sendCharityVote(elem){var charityID=elem.data("charity");$('#confirmModal').modal('hide');$.ajax({url:baseUrl+'/controller.php?key=983hd90ashd30djiaosd9w0dhaposjdiwwadsdw',type:"POST",data:{"_u":fingerprint,"_i":charityID,"_a":accountAddress,"_m":$('body').data('allowed-votes')},dataType:"json",success:function(data){if(data){if($('.vote-btn[data-charity="'+charityID+'"]').length){var totAllowed=retnum($('#rookieCardDetected .number-votes').text())-1;if(totAllowed>0){if($('.vote-btn[data-charity="'+charityID+'"]').hasClass('not-voted')){$('.vote-btn[data-charity="'+charityID+'"]').removeClass('not-voted').addClass('first-vote');}}else{if($('.vote-btn[data-charity="'+charityID+'"]').hasClass('first-vote')){$('.vote-btn[data-charity="'+charityID+'"]').addClass('second-vote');}
if($('.vote-btn[data-charity="'+charityID+'"]').hasClass('not-voted')){$('.vote-btn[data-charity="'+charityID+'"]').removeClass('not-voted').addClass('first-vote');}
$('.vote-btn').addClass('disable-vote');$('.vote-btn').addClass('locked-vote');$('.vote-btn').removeClass('new-voter');}}
getTotalVotes();}}});}
function getTotalVotes(){if($('.get-total-vote').length){$.ajax({url:baseUrl+'/controller.php?key=9safjkjdfk39sdfij34fksldfj3kf0wejfi3fsk',type:"GET",async:true,dataType:"json",success:function(data){if(data){$('.get-total-vote').each(function(i,e){$(e).attr('title',0);$(e).text('0');});$.each(data,function(i,e){if($('.get-total-vote[data-charity="'+i+'"]').length){$('.get-total-vote[data-charity="'+i+'"]').attr('title',e);$('.get-total-vote[data-charity="'+i+'"]').text(e);}});var totAllowed=retnum($('#rookieCardDetected .number-votes').text())-1;$('#rookieCardDetected .number-votes').text(totAllowed<2?totAllowed+' vote':totAllowed+' votes');}}});}}
function retnum(str){var num=str.replace(/[^0-9]/g,'');return parseInt(num,10);}
function getCurrentVote(allowed=0){if($('.vote-btn').length){if(!accountAddress){return false;}
showDisabledVote();$('body').data('allowed-votes',allowed);$.ajax({url:baseUrl+'/controller.php?key=as124j9sd93n9jdd9d3sij93i9wer39jrwierj3',type:"POST",data:{"_u":fingerprint,"_a":accountAddress},dataType:"json",success:function(data){var computedVotes=0;$('#loadingBox').hide();if(data.length){$.each(data,function(i,e){var charityID=e.charity_id;computedVotes+=parseInt(e.vote_count);if($('.vote-btn[data-charity="'+charityID+'"]').length){$('.vote-btn[data-charity="'+charityID+'"]').removeClass('not-voted');$('.vote-btn[data-charity="'+charityID+'"]').removeClass('disable-vote');if(i==0){$('.vote-btn[data-charity="'+charityID+'"]').addClass('first-vote');}}});}
if(allowed<2){$('#rookieCardDetected').addClass('no-rookiecard');}else{console.log('Rookie Card Detected');}
var totAllowed=allowed-computedVotes;$('#rookieCardDetected .number-votes').text(totAllowed<2?totAllowed+' vote':totAllowed+' votes');$('#rookieCardDetected').show();if(data.length){$.each(data,function(i,e){var charityID=e.charity_id;if($('.vote-btn[data-charity="'+charityID+'"]').length){if(totAllowed>0){}else{$('.vote-btn[data-charity="'+charityID+'"]').addClass('locked-vote');}
if(e.vote_count>1){$('.vote-btn[data-charity="'+charityID+'"]').addClass('second-vote');}}});}
$('.vote-btn').show();if(totAllowed>0){$('.vote-btn').removeClass('disable-vote');$('.vote-btn').addClass('new-voter');}}});}}
function initFingerprintJS(){const fpPromise=FingerprintJS.load()
fpPromise.then(fp=>fp.get()).then(result=>{const visitorId=result.visitorId;fingerprint=visitorId;})}
function initWalletFunctions(){if(typeof window.ethereum!=='undefined'){console.log('Wallet Detected!');isWalletExists=true;if(typeof ethereum.isMetaMask!=='undefined'){console.log('MetaMask Detected!');}
else{console.log('No MetaMask Detected!');isWalletExists=false;}}
else{if(!isMobile()){console.log('No Wallet Detected!');$('#noMetaMask').show();$('#connectWallet').css('opacity','0.5');showDisabledVote();ajaxGetCharityDonations();isWalletExists=false;return false;}
else{showDisabledVote();ajaxGetCharityDonations();isWalletExists=false;}}
$('#connectWallet').on('click',function(){if(isWalletExists){getMetaMaskAccount();}else{if(isMobile()){$('#mobileModal').modal('show');}}});setTimeout(function(){if(ethereum.selectedAddress){if($('#walletNotice').length){accountAddress=ethereum.selectedAddress;showAddress();ethereum.on('accountsChanged',function(accounts){window.location.reload();});ethereum.on('chainChanged',function(chainId){window.location.reload();});}else{showDisabledVote();ajaxGetCharityDonations();}}else{showDisabledVote();ajaxGetCharityDonations();}},300);$('#reAuthWallet').on('click',function(){reAuthWallet();});}
function checkSuperdogeAsset(){if(!accountAddress){ajaxGetCharityDonations();return false;}
$.ajax({url:baseUrl+'/controller.php?key=waoidmo9jiasjdiaowmOWomaosawdpdjsJWojdoj',type:"POST",data:{"address":accountAddress},dataType:"json",success:function(data){if(data.status){console.log('SUPDOG Detected');getCurrentVote(data.allowed);}else{showDisabledVote();$('#loadingBox').hide();$('#noSupDog').show();console.log('No $SUPDOG Detected');}
charityVoting();ajaxGetCharityDonations();}});}
async function getMetaMaskAccount(){const accounts=await ethereum.request({method:'eth_requestAccounts'});accountAddress=accounts[0];showAddress();}
async function reAuthWallet(){const permissions=await ethereum.request({method:'wallet_requestPermissions',params:[{eth_accounts:{},}]});}
function showAddress(){$('#walletNotice').hide();$('#displayAddress').show();$('#displayAddress #addressText').text(accountAddress).attr('title',accountAddress);checkSuperdogeAsset();}
function showDisabledVote(){$('.vote-btn').show();$('.vote-btn').addClass('disable-vote');}
function fixCardContainerHeight()
{if(!$('.card-container').length){return false;}
$('.card-container').each(function(i,e){var elem=$(e);var chardesc=elem.find('.charity-desc-back');var charlogo=elem.find('.char-desc-logo');if(chardesc.length){chardesc.css('height',(elem.height()-charlogo.height()-40)+'px');}});}
function slickCarousel()
{if(!$('.slick-carousel').length){return false;}
var slickCarousel=$('.slick-carousel').slick({infinite:false,arrows:false,initialSlide:2});$('body').on('click','.prev-slide',function(){slickCarousel.slick('slickPrev');});$('body').on('click','.next-slide',function(){slickCarousel.slick('slickNext');});slickCarousel.on('beforeChange',function(event,slick,currentSlide,nextSlide){$('.line-chart').fadeOut();});slickCarousel.on('afterChange',function(event,slick,currentSlide,nextSlide){$('.line-chart-'+currentSlide).fadeIn();});}
function canvasImage()
{var img=new Image();var canvas=document.getElementById("canvas");var ctx=canvas.getContext("2d");img.onload=function(){canvas.width=184;canvas.height=184;ctx.mozImageSmoothingEnabled=false;ctx.webkitImageSmoothingEnabled=false;ctx.msImageSmoothingEnabled=false;ctx.imageSmoothingEnabled=false;stepped_scale(canvas,img,canvas.width,0.2);}
img.src='./assets/images/nft-levels/uncommon-l.png';}
function stepped_scale(canvas,img,width,step){ctx=canvas.getContext("2d"),oc=document.createElement('canvas'),octx=oc.getContext('2d');canvas.width=width;canvas.height=canvas.width*img.height/img.width;if(img.width*step>width){var mul=1/step;var cur={width:Math.floor(img.width*step),height:Math.floor(img.height*step)}
oc.width=cur.width;oc.height=cur.height;octx.drawImage(img,0,0,cur.width,cur.height);while(cur.width*step>width){cur={width:Math.floor(cur.width*step),height:Math.floor(cur.height*step)};octx.drawImage(oc,0,0,cur.width*mul,cur.height*mul,0,0,cur.width,cur.height);}
ctx.drawImage(oc,0,0,cur.width,cur.height,0,0,canvas.width,canvas.height);}else{ctx.drawImage(img,0,0,canvas.width,canvas.height);}}
function featuresCarousel()
{if(!$('.featured-carousel').length){return false;}
var slickCarousel=$('.featured-carousel').slick({infinite:true,slidesToShow:5,slidesToScroll:1,autoplay:true,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:600,settings:"unslick"},{breakpoint:480,settings:"unslick"}]});}
function supDogTradeWidget()
{if(!$('#rubic-widget-root').length){return false;}
var style='horizontal';if(isMobile()){style='vertical';}
var configuration={from:'ETH',to:'GROK',fromChain:'ETH',toChain:'ETH',amount:1,iframe:style,hideSelectionFrom:false,hideSelectionTo:true,theme:'dark',background:'#000',injectTokens:{bsc:['0x0000000000000000000000000000000000']}}
if(rubicWidget.configuration.iframe!=style){rubicWidget.init(configuration);}}
$(function(){slickCarousel();featuresCarousel();initWalletFunctions();initFingerprintJS();dynamicHeight();smoothScrollToDiv();copyToClipboard();offsetHeaderPlayer();supDogTradeWidget();$(window).resize(function(){dynamicHeight();fixCardContainerHeight();offsetHeaderPlayer();supDogTradeWidget();});textStrokes();hoverVideo();changeVideoTOGif();getTotalVotes();if(!$('.vote-btn').length){}
shareModal();$('body').on('contextmenu','img, canvas',function(e){return false;});setTimeout(function(){var afterReveal=function(e){var elem=$(e);if(elem.data('after-reveal-class')){setTimeout(function(){elem.addClass(elem.data('after-reveal-class'));},1100);}
if(elem.hasClass('card-container')){fixCardContainerHeight();}
if(elem.hasClass('episode-holder')){offsetHeaderPlayer();}};var wow=new WOW({callback:afterReveal,mobile:false});wow.init();scaleText();fixCardContainerHeight();if($('.slick-carousel').length){$('.slick-carousel').slick('setPosition');}
if(isMobile()){$('div[data-after-reveal-class]').each(function(i,e){$(e).addClass($(e).data('after-reveal-class'));});}
else{offsetHeaderPlayer();}},300);});