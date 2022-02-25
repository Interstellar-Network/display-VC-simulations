/****************************** 
 * Keypad7Frame1-4Mobile Test *
 ******************************/


// store info about the experiment session:
let expName = 'Keypad7Frame1-4mobile';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
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
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'F6.png', 'path': 'F6.png'},
    {'name': 'F7.png', 'path': 'F7.png'},
    {'name': 'F2.png', 'path': 'F2.png'},
    {'name': 'F3.png', 'path': 'F3.png'},
    {'name': 'F5.png', 'path': 'F5.png'},
    {'name': 'F1.png', 'path': 'F1.png'},
    {'name': 'F4.png', 'path': 'F4.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


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
var F1;
var F2;
var F3;
var F4;
var F5;
var F6;
var F7;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "display_Frame"
  display_FrameClock = new util.Clock();
  F1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F1', units : 'height', 
    image : 'F1.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  F2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F2', units : 'height', 
    image : 'F2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -1.0 
  });
  F3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F3', units : 'height', 
    image : 'F3.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -2.0 
  });
  F4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F4', units : 'height', 
    image : 'F4.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -3.0 
  });
  F5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F5', units : 'height', 
    image : 'F5.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -4.0 
  });
  F6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F6', units : 'height', 
    image : 'F6.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -5.0 
  });
  F7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F7', units : 'height', 
    image : 'F7.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 2.175],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -6.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 500, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_2LoopScheduler.add(trialsLoopScheduler);
      trials_2LoopScheduler.add(trialsLoopEnd);
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 7, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(display_FrameRoutineBegin(snapshot));
      trialsLoopScheduler.add(display_FrameRoutineEachFrame());
      trialsLoopScheduler.add(display_FrameRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

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
    routineTimer.add(0.112000);
    // update component parameters for each repeat
    // keep track of which components have finished
    display_FrameComponents = [];
    display_FrameComponents.push(F1);
    display_FrameComponents.push(F2);
    display_FrameComponents.push(F3);
    display_FrameComponents.push(F4);
    display_FrameComponents.push(F5);
    display_FrameComponents.push(F6);
    display_FrameComponents.push(F7);
    
    display_FrameComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *F1* updates
    if (frameN >= 0 && F1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F1.tStart = t;  // (not accounting for frame time here)
      F1.frameNStart = frameN;  // exact frame index
      
      F1.setAutoDraw(true);
    }

    if (F1.status === PsychoJS.Status.STARTED && frameN >= (F1.frameNStart + 1)) {
      F1.setAutoDraw(false);
    }
    
    // *F2* updates
    if (frameN >= 1 && F2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F2.tStart = t;  // (not accounting for frame time here)
      F2.frameNStart = frameN;  // exact frame index
      
      F2.setAutoDraw(true);
    }

    if (F2.status === PsychoJS.Status.STARTED && frameN >= (F2.frameNStart + 1)) {
      F2.setAutoDraw(false);
    }
    
    // *F3* updates
    if (frameN >= 2 && F3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F3.tStart = t;  // (not accounting for frame time here)
      F3.frameNStart = frameN;  // exact frame index
      
      F3.setAutoDraw(true);
    }

    if (F3.status === PsychoJS.Status.STARTED && frameN >= (F3.frameNStart + 3)) {
      F3.setAutoDraw(false);
    }
    
    // *F4* updates
    if (frameN >= 3 && F4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F4.tStart = t;  // (not accounting for frame time here)
      F4.frameNStart = frameN;  // exact frame index
      
      F4.setAutoDraw(true);
    }

    if (F4.status === PsychoJS.Status.STARTED && frameN >= (F4.frameNStart + 1)) {
      F4.setAutoDraw(false);
    }
    
    // *F5* updates
    if (frameN >= 4 && F5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F5.tStart = t;  // (not accounting for frame time here)
      F5.frameNStart = frameN;  // exact frame index
      
      F5.setAutoDraw(true);
    }

    if (F5.status === PsychoJS.Status.STARTED && frameN >= (F5.frameNStart + 1)) {
      F5.setAutoDraw(false);
    }
    
    // *F6* updates
    if (frameN >= 5 && F6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F6.tStart = t;  // (not accounting for frame time here)
      F6.frameNStart = frameN;  // exact frame index
      
      F6.setAutoDraw(true);
    }

    if (F6.status === PsychoJS.Status.STARTED && frameN >= (F6.frameNStart + 1)) {
      F6.setAutoDraw(false);
    }
    
    // *F7* updates
    if (frameN >= 6 && F7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F7.tStart = t;  // (not accounting for frame time here)
      F7.frameNStart = frameN;  // exact frame index
      
      F7.setAutoDraw(true);
    }

    if (F7.status === PsychoJS.Status.STARTED && frameN >= (F7.frameNStart + 1)) {
      F7.setAutoDraw(false);
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
    display_FrameComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function display_FrameRoutineEnd() {
  return async function () {
    //------Ending Routine 'display_Frame'-------
    display_FrameComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
