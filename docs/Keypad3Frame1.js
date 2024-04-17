/********************** 
 * Keypad3Frame1 Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.1.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Keypad3Frame1';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const loop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop2LoopBegin(loop2LoopScheduler));
flowScheduler.add(loop2LoopScheduler);
flowScheduler.add(loop2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'K1.png', 'path': 'K1.png'},
    {'name': 'K3.png', 'path': 'K3.png'},
    {'name': 'K2.png', 'path': 'K2.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var display_FrameClock;
var K1;
var K2;
var K3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "display_Frame"
  display_FrameClock = new util.Clock();
  K1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'K1', units : 'height', 
    image : 'K1.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.56125],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  K2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'K2', units : 'height', 
    image : 'K2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.56125],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -1.0 
  });
  K3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'K3', units : 'height', 
    image : 'K3.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.56125],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var loop2;
var currentLoop;
function loop2LoopBegin(loop2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 500, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop2'
    });
    psychoJS.experiment.addLoop(loop2); // add the loop to the experiment
    currentLoop = loop2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop2 of loop2) {
      const snapshot = loop2.getSnapshot();
      loop2LoopScheduler.add(importConditions(snapshot));
      const loop1LoopScheduler = new Scheduler(psychoJS);
      loop2LoopScheduler.add(loop1LoopBegin(loop1LoopScheduler, snapshot));
      loop2LoopScheduler.add(loop1LoopScheduler);
      loop2LoopScheduler.add(loop1LoopEnd);
      loop2LoopScheduler.add(endLoopIteration(loop2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var loop1;
function loop1LoopBegin(loop1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop1'
    });
    psychoJS.experiment.addLoop(loop1); // add the loop to the experiment
    currentLoop = loop1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop1 of loop1) {
      const snapshot = loop1.getSnapshot();
      loop1LoopScheduler.add(importConditions(snapshot));
      loop1LoopScheduler.add(display_FrameRoutineBegin(snapshot));
      loop1LoopScheduler.add(display_FrameRoutineEachFrame());
      loop1LoopScheduler.add(display_FrameRoutineEnd());
      loop1LoopScheduler.add(endLoopIteration(loop1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop1LoopEnd() {
  psychoJS.experiment.removeLoop(loop1);

  return Scheduler.Event.NEXT;
}


async function loop2LoopEnd() {
  psychoJS.experiment.removeLoop(loop2);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var display_FrameComponents;
function display_FrameRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'display_Frame'-------
    t = 0;
    display_FrameClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    display_FrameComponents = [];
    display_FrameComponents.push(K1);
    display_FrameComponents.push(K2);
    display_FrameComponents.push(K3);
    
    for (const thisComponent of display_FrameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function display_FrameRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'display_Frame'-------
    // get current time
    t = display_FrameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *K1* updates
    if (frameN >= 0 && K1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      K1.tStart = t;  // (not accounting for frame time here)
      K1.frameNStart = frameN;  // exact frame index
      
      K1.setAutoDraw(true);
    }

    if (K1.status === PsychoJS.Status.STARTED && frameN >= (K1.frameNStart + 1)) {
      K1.setAutoDraw(false);
    }
    
    // *K2* updates
    if (frameN >= 1 && K2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      K2.tStart = t;  // (not accounting for frame time here)
      K2.frameNStart = frameN;  // exact frame index
      
      K2.setAutoDraw(true);
    }

    if (K2.status === PsychoJS.Status.STARTED && frameN >= (K2.frameNStart + 1)) {
      K2.setAutoDraw(false);
    }
    
    // *K3* updates
    if (frameN >= 2 && K3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      K3.tStart = t;  // (not accounting for frame time here)
      K3.frameNStart = frameN;  // exact frame index
      
      K3.setAutoDraw(true);
    }

    if (K3.status === PsychoJS.Status.STARTED && frameN >= (K3.frameNStart + 1)) {
      K3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of display_FrameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function display_FrameRoutineEnd() {
  return async function () {
    //------Ending Routine 'display_Frame'-------
    for (const thisComponent of display_FrameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "display_Frame" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
