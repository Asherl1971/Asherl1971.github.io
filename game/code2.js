gdjs.GameCode = {};
gdjs.GameCode.repeatCount2 = 0;

gdjs.GameCode.repeatIndex2 = 0;

gdjs.GameCode.GDRoadObjects1= [];
gdjs.GameCode.GDRoadObjects2= [];
gdjs.GameCode.GDRoadObjects3= [];
gdjs.GameCode.GDLPlayerObjects1= [];
gdjs.GameCode.GDLPlayerObjects2= [];
gdjs.GameCode.GDLPlayerObjects3= [];
gdjs.GameCode.GDRPlayerObjects1= [];
gdjs.GameCode.GDRPlayerObjects2= [];
gdjs.GameCode.GDRPlayerObjects3= [];
gdjs.GameCode.GDtimerObjects1= [];
gdjs.GameCode.GDtimerObjects2= [];
gdjs.GameCode.GDtimerObjects3= [];
gdjs.GameCode.GDtime_95scoreObjects1= [];
gdjs.GameCode.GDtime_95scoreObjects2= [];
gdjs.GameCode.GDtime_95scoreObjects3= [];
gdjs.GameCode.GDcar1Objects1= [];
gdjs.GameCode.GDcar1Objects2= [];
gdjs.GameCode.GDcar1Objects3= [];
gdjs.GameCode.GDcar2Objects1= [];
gdjs.GameCode.GDcar2Objects2= [];
gdjs.GameCode.GDcar2Objects3= [];
gdjs.GameCode.GDcar3Objects1= [];
gdjs.GameCode.GDcar3Objects2= [];
gdjs.GameCode.GDcar3Objects3= [];
gdjs.GameCode.GDcar4Objects1= [];
gdjs.GameCode.GDcar4Objects2= [];
gdjs.GameCode.GDcar4Objects3= [];
gdjs.GameCode.GDbug1Objects1= [];
gdjs.GameCode.GDbug1Objects2= [];
gdjs.GameCode.GDbug1Objects3= [];
gdjs.GameCode.GDbug2Objects1= [];
gdjs.GameCode.GDbug2Objects2= [];
gdjs.GameCode.GDbug2Objects3= [];
gdjs.GameCode.GDmedObjects1= [];
gdjs.GameCode.GDmedObjects2= [];
gdjs.GameCode.GDmedObjects3= [];
gdjs.GameCode.GDwallObjects1= [];
gdjs.GameCode.GDwallObjects2= [];
gdjs.GameCode.GDwallObjects3= [];
gdjs.GameCode.GDplayerHitboxLObjects1= [];
gdjs.GameCode.GDplayerHitboxLObjects2= [];
gdjs.GameCode.GDplayerHitboxLObjects3= [];
gdjs.GameCode.GDplayerHitboxRObjects1= [];
gdjs.GameCode.GDplayerHitboxRObjects2= [];
gdjs.GameCode.GDplayerHitboxRObjects3= [];
gdjs.GameCode.GDbtnObjects1= [];
gdjs.GameCode.GDbtnObjects2= [];
gdjs.GameCode.GDbtnObjects3= [];
gdjs.GameCode.GDdebugBlockObjects1= [];
gdjs.GameCode.GDdebugBlockObjects2= [];
gdjs.GameCode.GDdebugBlockObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.eventsList0x6a6e9c = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x6a6e9c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects2Objects = Hashtable.newFrom({"car1": gdjs.GameCode.GDcar1Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar2Objects2Objects = Hashtable.newFrom({"car2": gdjs.GameCode.GDcar2Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar3Objects2Objects = Hashtable.newFrom({"car3": gdjs.GameCode.GDcar3Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar4Objects1Objects = Hashtable.newFrom({"car4": gdjs.GameCode.GDcar4Objects1});gdjs.GameCode.eventsList0x6a7344 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(370);
}{}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(188);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar1Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar2Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar2Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar3Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar3Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar3Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar3Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar4Objects1Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}{for(var i = 0, len = gdjs.GameCode.GDcar4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar4Objects1[i].flipY(true);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x6a7344
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects2Objects = Hashtable.newFrom({"car1": gdjs.GameCode.GDcar1Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar2Objects2Objects = Hashtable.newFrom({"car2": gdjs.GameCode.GDcar2Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar3Objects2Objects = Hashtable.newFrom({"car3": gdjs.GameCode.GDcar3Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar4Objects1Objects = Hashtable.newFrom({"car4": gdjs.GameCode.GDcar4Objects1});gdjs.GameCode.eventsList0x6adc5c = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(591);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(780);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar1Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar2Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar2Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar3Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar3Objects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)), -(400), "");
}{for(var i = 0, len = gdjs.GameCode.GDcar3Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDcar3Objects2[i].flipY(true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDcar4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar4Objects1Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)), -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}{for(var i = 0, len = gdjs.GameCode.GDcar4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar4Objects1[i].flipY(true);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x6adc5c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects1});gdjs.GameCode.eventsList0x6b436c = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDmedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects, 200, -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "medSpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDmedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects, 385, -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "medSpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDmedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects2Objects, 605, -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "medSpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDmedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects, 792, -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "medSpawn");
}}

}


}; //End of gdjs.GameCode.eventsList0x6b436c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug1Objects2Objects = Hashtable.newFrom({"bug1": gdjs.GameCode.GDbug1Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1Objects = Hashtable.newFrom({"bug2": gdjs.GameCode.GDbug2Objects1});gdjs.GameCode.eventsList0x6b99cc = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDbug1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug1Objects2Objects, gdjs.randomInRange(200, 700), -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bugSpawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Mosquito-Sound Effect.mp3", false, 400, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDbug2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1Objects, gdjs.randomInRange(200, 700), -(400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bugSpawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Mosquito-Sound Effect.mp3", false, 700, 1);
}}

}


}; //End of gdjs.GameCode.eventsList0x6b99cc
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDdebugBlockObjects1Objects = Hashtable.newFrom({"debugBlock": gdjs.GameCode.GDdebugBlockObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1ObjectsGDgdjs_46GameCode_46GDbug1Objects1Objects = Hashtable.newFrom({"bug2": gdjs.GameCode.GDbug2Objects1, "bug1": gdjs.GameCode.GDbug1Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerHitboxLObjects1ObjectsGDgdjs_46GameCode_46GDplayerHitboxRObjects1Objects = Hashtable.newFrom({"playerHitboxL": gdjs.GameCode.GDplayerHitboxLObjects1, "playerHitboxR": gdjs.GameCode.GDplayerHitboxRObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects = Hashtable.newFrom({"med": gdjs.GameCode.GDmedObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1ObjectsGDgdjs_46GameCode_46GDbug1Objects1Objects = Hashtable.newFrom({"bug2": gdjs.GameCode.GDbug2Objects1, "bug1": gdjs.GameCode.GDbug1Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerHitboxLObjects1ObjectsGDgdjs_46GameCode_46GDplayerHitboxRObjects1Objects = Hashtable.newFrom({"playerHitboxL": gdjs.GameCode.GDplayerHitboxLObjects1, "playerHitboxR": gdjs.GameCode.GDplayerHitboxRObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects1ObjectsGDgdjs_46GameCode_46GDcar2Objects1ObjectsGDgdjs_46GameCode_46GDcar3Objects1ObjectsGDgdjs_46GameCode_46GDcar4Objects1Objects = Hashtable.newFrom({"car1": gdjs.GameCode.GDcar1Objects1, "car2": gdjs.GameCode.GDcar2Objects1, "car3": gdjs.GameCode.GDcar3Objects1, "car4": gdjs.GameCode.GDcar4Objects1});gdjs.GameCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDdebugBlockObjects1.createFrom(runtimeScene.getObjects("debugBlock"));
gdjs.GameCode.GDplayerHitboxLObjects1.createFrom(runtimeScene.getObjects("playerHitboxL"));
gdjs.GameCode.GDplayerHitboxRObjects1.createFrom(runtimeScene.getObjects("playerHitboxR"));
gdjs.GameCode.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.GameCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtimerObjects1[i].resetTimer("ScoreTimer");
}
}{runtimeScene.getVariables().get("scoreTime").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxLObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxLObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxRObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxRObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDdebugBlockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdebugBlockObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Car Passing Sound Effects.mp3", true, 30, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Room_For_Two.mp3", true, 70, 1);
}}

}


{

gdjs.GameCode.GDRoadObjects1.createFrom(runtimeScene.getObjects("Road"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRoadObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRoadObjects1[i].getY() >= (gdjs.GameCode.GDRoadObjects1[i].getHeight()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRoadObjects1[k] = gdjs.GameCode.GDRoadObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRoadObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDRoadObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRoadObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoadObjects1[i].setY(-((gdjs.GameCode.GDRoadObjects1[i].getHeight())));
}
}}

}


{


{
gdjs.GameCode.GDRoadObjects1.createFrom(runtimeScene.getObjects("Road"));
{for(var i = 0, len = gdjs.GameCode.GDRoadObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoadObjects1[i].setY(gdjs.GameCode.GDRoadObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDLPlayerObjects1.createFrom(runtimeScene.getObjects("LPlayer"));
gdjs.GameCode.GDplayerHitboxLObjects1.createFrom(runtimeScene.getObjects("playerHitboxL"));
{for(var i = 0, len = gdjs.GameCode.GDLPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLPlayerObjects1[i].setX(-(345));
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxLObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxLObjects1[i].setX(385);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDLPlayerObjects1.createFrom(runtimeScene.getObjects("LPlayer"));
gdjs.GameCode.GDplayerHitboxLObjects1.createFrom(runtimeScene.getObjects("playerHitboxL"));
{for(var i = 0, len = gdjs.GameCode.GDLPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLPlayerObjects1[i].setX(-(536));
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxLObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxLObjects1[i].setX(206);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRPlayerObjects1.createFrom(runtimeScene.getObjects("RPlayer"));
gdjs.GameCode.GDplayerHitboxRObjects1.createFrom(runtimeScene.getObjects("playerHitboxR"));
{for(var i = 0, len = gdjs.GameCode.GDRPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRPlayerObjects1[i].setX(625);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxRObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxRObjects1[i].setX(610);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRPlayerObjects1.createFrom(runtimeScene.getObjects("RPlayer"));
gdjs.GameCode.GDplayerHitboxRObjects1.createFrom(runtimeScene.getObjects("playerHitboxR"));
{for(var i = 0, len = gdjs.GameCode.GDRPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRPlayerObjects1[i].setX(816);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerHitboxRObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerHitboxRObjects1[i].setX(787);
}
}}

}


{



}


{


gdjs.GameCode.repeatCount2 = 1;
for(gdjs.GameCode.repeatIndex2 = 0;gdjs.GameCode.repeatIndex2 < gdjs.GameCode.repeatCount2;++gdjs.GameCode.repeatIndex2) {
gdjs.GameCode.GDtimerObjects2.createFrom(runtimeScene.getObjects("timer"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "ScoreTimer");
}if (gdjs.GameCode.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("scoreTime").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDtimerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtimerObjects2[i].resetTimer("ScoreTimer");
}
}}
}

}


{


{
gdjs.GameCode.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.GameCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime"))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) - gdjs.randomInRange(0.2, 0.8), "EnemySpawn");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, 4));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 2));
}
{ //Subevents
gdjs.GameCode.eventsList0x6a7344(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) - gdjs.randomInRange(0.2, 0.8), "EnemySpawn");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, 4));
}{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.randomInRange(1, 2));
}
{ //Subevents
gdjs.GameCode.eventsList0x6adc5c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GameCode.GDcar1Objects1.createFrom(runtimeScene.getObjects("car1"));
gdjs.GameCode.GDcar2Objects1.createFrom(runtimeScene.getObjects("car2"));
gdjs.GameCode.GDcar3Objects1.createFrom(runtimeScene.getObjects("car3"));
gdjs.GameCode.GDcar4Objects1.createFrom(runtimeScene.getObjects("car4"));
{for(var i = 0, len = gdjs.GameCode.GDcar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar1Objects1[i].setY(gdjs.GameCode.GDcar1Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDcar2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar2Objects1[i].setY(gdjs.GameCode.GDcar2Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDcar3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar3Objects1[i].setY(gdjs.GameCode.GDcar3Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDcar4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDcar4Objects1[i].setY(gdjs.GameCode.GDcar4Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 2));
}
}{}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(6, 8), "medSpawn");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(8).setNumber(gdjs.randomInRange(1, 4));
}
{ //Subevents
gdjs.GameCode.eventsList0x6b436c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GameCode.GDmedObjects1.createFrom(runtimeScene.getObjects("med"));
{for(var i = 0, len = gdjs.GameCode.GDmedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmedObjects1[i].setY(gdjs.GameCode.GDmedObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)), "bugSpawn");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(9).setNumber(gdjs.randomInRange(1, 2));
}
{ //Subevents
gdjs.GameCode.eventsList0x6b99cc(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GameCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));
gdjs.GameCode.GDbug1Objects1.createFrom(runtimeScene.getObjects("bug1"));
gdjs.GameCode.GDbug2Objects1.createFrom(runtimeScene.getObjects("bug2"));
{for(var i = 0, len = gdjs.GameCode.GDbug1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug1Objects1[i].setY(gdjs.GameCode.GDbug1Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * gdjs.randomInRange(1, 3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDbug1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug1Objects1[i].setX(gdjs.GameCode.GDbug1Objects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * gdjs.randomInRange(-(0.3), 0.3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDbug2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug2Objects1[i].setY(gdjs.GameCode.GDbug2Objects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * gdjs.randomInRange(1, 3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDbug2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug2Objects1[i].setX(gdjs.GameCode.GDbug2Objects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * gdjs.randomInRange(-(0.3), 0.3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbtnObjects1[i].hide();
}
}}

}


{

gdjs.GameCode.GDbug1Objects1.createFrom(runtimeScene.getObjects("bug1"));
gdjs.GameCode.GDbug2Objects1.createFrom(runtimeScene.getObjects("bug2"));
gdjs.GameCode.GDdebugBlockObjects1.createFrom(runtimeScene.getObjects("debugBlock"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDdebugBlockObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1ObjectsGDgdjs_46GameCode_46GDbug1Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));
{for(var i = 0, len = gdjs.GameCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbtnObjects1[i].hide(false);
}
}}

}


{

gdjs.GameCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbtnObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbtnObjects1[i].isVisible() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbtnObjects1[k] = gdjs.GameCode.GDbtnObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbtnObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDbug1Objects1.createFrom(runtimeScene.getObjects("bug1"));
gdjs.GameCode.GDbug2Objects1.createFrom(runtimeScene.getObjects("bug2"));
{for(var i = 0, len = gdjs.GameCode.GDbug2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDbug1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbug1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Bug dead-Sound Effects.mp3", false, 100, 1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")) <= 1000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(3, 4));
}{runtimeScene.getVariables().getFromIndex(10).setNumber(gdjs.randomInRange(6, 8));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")) >= 1000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(6);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(3, 3));
}{runtimeScene.getVariables().getFromIndex(10).setNumber(gdjs.randomInRange(5, 7));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")) >= 2000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(2, 3));
}{runtimeScene.getVariables().getFromIndex(10).setNumber(gdjs.randomInRange(4, 7));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")) >= 3000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(10);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(2, 2));
}{runtimeScene.getVariables().getFromIndex(10).setNumber(gdjs.randomInRange(3, 6));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")) >= 5000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(1.8, 2.5));
}{runtimeScene.getVariables().getFromIndex(10).setNumber(gdjs.randomInRange(2, 5));
}}

}


{



}


{

gdjs.GameCode.GDmedObjects1.createFrom(runtimeScene.getObjects("med"));
gdjs.GameCode.GDplayerHitboxLObjects1.createFrom(runtimeScene.getObjects("playerHitboxL"));
gdjs.GameCode.GDplayerHitboxRObjects1.createFrom(runtimeScene.getObjects("playerHitboxR"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerHitboxLObjects1ObjectsGDgdjs_46GameCode_46GDplayerHitboxRObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmedObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmedObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Bug Can Sound Effect.mp3", false, 100, 1);
}}

}


{

gdjs.GameCode.GDmedObjects1.createFrom(runtimeScene.getObjects("med"));
gdjs.GameCode.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmedObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ScoreTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")));
}}

}


{

gdjs.GameCode.GDbug1Objects1.createFrom(runtimeScene.getObjects("bug1"));
gdjs.GameCode.GDbug2Objects1.createFrom(runtimeScene.getObjects("bug2"));
gdjs.GameCode.GDwallObjects1.createFrom(runtimeScene.getObjects("wall"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbug2Objects1ObjectsGDgdjs_46GameCode_46GDbug1Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ScoreTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")));
}}

}


{

gdjs.GameCode.GDcar1Objects1.createFrom(runtimeScene.getObjects("car1"));
gdjs.GameCode.GDcar2Objects1.createFrom(runtimeScene.getObjects("car2"));
gdjs.GameCode.GDcar3Objects1.createFrom(runtimeScene.getObjects("car3"));
gdjs.GameCode.GDcar4Objects1.createFrom(runtimeScene.getObjects("car4"));
gdjs.GameCode.GDplayerHitboxLObjects1.createFrom(runtimeScene.getObjects("playerHitboxL"));
gdjs.GameCode.GDplayerHitboxRObjects1.createFrom(runtimeScene.getObjects("playerHitboxR"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerHitboxLObjects1ObjectsGDgdjs_46GameCode_46GDplayerHitboxRObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcar1Objects1ObjectsGDgdjs_46GameCode_46GDcar2Objects1ObjectsGDgdjs_46GameCode_46GDcar3Objects1ObjectsGDgdjs_46GameCode_46GDcar4Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ScoreTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scoreTime")));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\People Death Sound Effect.mp3", false, 100, 1);
}}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0xb5aa0


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDRoadObjects1.length = 0;
gdjs.GameCode.GDRoadObjects2.length = 0;
gdjs.GameCode.GDRoadObjects3.length = 0;
gdjs.GameCode.GDLPlayerObjects1.length = 0;
gdjs.GameCode.GDLPlayerObjects2.length = 0;
gdjs.GameCode.GDLPlayerObjects3.length = 0;
gdjs.GameCode.GDRPlayerObjects1.length = 0;
gdjs.GameCode.GDRPlayerObjects2.length = 0;
gdjs.GameCode.GDRPlayerObjects3.length = 0;
gdjs.GameCode.GDtimerObjects1.length = 0;
gdjs.GameCode.GDtimerObjects2.length = 0;
gdjs.GameCode.GDtimerObjects3.length = 0;
gdjs.GameCode.GDtime_95scoreObjects1.length = 0;
gdjs.GameCode.GDtime_95scoreObjects2.length = 0;
gdjs.GameCode.GDtime_95scoreObjects3.length = 0;
gdjs.GameCode.GDcar1Objects1.length = 0;
gdjs.GameCode.GDcar1Objects2.length = 0;
gdjs.GameCode.GDcar1Objects3.length = 0;
gdjs.GameCode.GDcar2Objects1.length = 0;
gdjs.GameCode.GDcar2Objects2.length = 0;
gdjs.GameCode.GDcar2Objects3.length = 0;
gdjs.GameCode.GDcar3Objects1.length = 0;
gdjs.GameCode.GDcar3Objects2.length = 0;
gdjs.GameCode.GDcar3Objects3.length = 0;
gdjs.GameCode.GDcar4Objects1.length = 0;
gdjs.GameCode.GDcar4Objects2.length = 0;
gdjs.GameCode.GDcar4Objects3.length = 0;
gdjs.GameCode.GDbug1Objects1.length = 0;
gdjs.GameCode.GDbug1Objects2.length = 0;
gdjs.GameCode.GDbug1Objects3.length = 0;
gdjs.GameCode.GDbug2Objects1.length = 0;
gdjs.GameCode.GDbug2Objects2.length = 0;
gdjs.GameCode.GDbug2Objects3.length = 0;
gdjs.GameCode.GDmedObjects1.length = 0;
gdjs.GameCode.GDmedObjects2.length = 0;
gdjs.GameCode.GDmedObjects3.length = 0;
gdjs.GameCode.GDwallObjects1.length = 0;
gdjs.GameCode.GDwallObjects2.length = 0;
gdjs.GameCode.GDwallObjects3.length = 0;
gdjs.GameCode.GDplayerHitboxLObjects1.length = 0;
gdjs.GameCode.GDplayerHitboxLObjects2.length = 0;
gdjs.GameCode.GDplayerHitboxLObjects3.length = 0;
gdjs.GameCode.GDplayerHitboxRObjects1.length = 0;
gdjs.GameCode.GDplayerHitboxRObjects2.length = 0;
gdjs.GameCode.GDplayerHitboxRObjects3.length = 0;
gdjs.GameCode.GDbtnObjects1.length = 0;
gdjs.GameCode.GDbtnObjects2.length = 0;
gdjs.GameCode.GDbtnObjects3.length = 0;
gdjs.GameCode.GDdebugBlockObjects1.length = 0;
gdjs.GameCode.GDdebugBlockObjects2.length = 0;
gdjs.GameCode.GDdebugBlockObjects3.length = 0;

gdjs.GameCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['GameCode'] = gdjs.GameCode;
