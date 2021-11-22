export const state = () => ({
    gameListing: [
        {name: 'REGULAR BINGO', black: [0,6,12,18,24] },
        {name: 'LETTER X', black: [0,4,6,8,12,16,18,20,24] },
        {name: 'SMALL PICTURE FRAME', black: [6,7,8,11,13,16,17,18] },
        {name: 'LARGE PICTURE FRAME', black: [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24] },
        {name: 'DOUBLE POSTAGE', black: [0,1,5,6,18,19,23,24] },
        {name: 'COVER ALL', black: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] },
        {name: 'REGULAR OR STAMP', black: [0,6,12,18,24], red: [3,4,8,9] },
        {name: 'POSTAGE STAMP', black: [3,4,8,9] },
        {name: 'LARGE DIAMOND', black: [2,6,7,8,10,11,12,13,14,16,17,18,22] },
        {name: 'REGULAR OR 4 CORNERS', black: [10,11,12,13,14], red: [0,4,20,24]},
    ],
    cardBank: [],
    showGrid: true,
  });
  
  /**
   * 
   * @param {*} state 
   * @returns 
   */
  function isGameOver(state){
    const availableCards = Object.keys(state.cardBank).filter((key) =>{
      const card = state.cardBank[key];
      return !card.clicked;
    })
    console.log('state/isGameOver',!availableCards.length)
    return !availableCards.length;
  }
  
  export const mutations = {
    // state mutation
    selectQuestion(state, cardIndex) {
      state.currentIndex = cardIndex;
      state.cardBank[cardIndex].class = 'disabled btn btn-outline-secondary';
      state.showGrid = false;
      state.showQuestion = true;
      state.showEntry = true;
      state.buttonNext = 'Submit';
      state.cardBank[cardIndex].clicked = true;
    },
    answerQuestion(state, value) {
      state.showAnswer = true;
      state.showQuestion = false;
      state.showGrid = false;
      state.showEntry = false;
      state.buttonNext = 'Next';
      if (value) {
        state.score += state.activeCard.value;
      } else {
        // state.score -= state.activeCard.value;
      }
    },
    goBackToGrid(state) {
      console.log('goBackToGrid')
      state.showGrid = true;
      state.showEntry = false;
      state.showAnswer = false;
      state.showQuestion = false;
      state.buttonNext = 'Submit';
      state.endGame = isGameOver(state);
    },
    debugState(state) {
      console.log(state);
    },
    loadQuestions(state, value) {
      console.log('loading questions');
      state.cardBank = value;
    },
    toggleIsTimerRunning(state, value) {
      console.log('toggleIsTimerRunning', state.isTimerRunning);
      state.isTimerRunning = !state.isTimerRunning;
    },
    /**
     * @param {string} state // boilerplate nuxty/vue things
     * @param {object} value - {value:100 etc., isCorrect: boolean}
   */
    updateActiveCard(state, value) {
      let val = value;
      if (val && val.includes('$')) val = val.split('$')[1];
      if (typeof val === 'string') val = parseInt(val);
  
      state.activeCard.value = val;
    },
  
    resetTimer(state) {
      state.timer.seconds = state.timer.defaultDuration;
  
      if (state.timer.timerId) clearInterval(state.timer.timerId);
      state.timer.timerId = undefined;
      state.isTimerRunning = false;
    },
    decrementTimer(state) {
      if (state.timer.seconds <= 0) {
        state.timer.seconds = 0;
        return;
      }
      state.timer.seconds -= 1;
    },
    showAnswer(state) {
      state.showAnswer = true;
      state.showQuestion = false;
      state.showGrid = false;
      state.showEntry = false;
      state.buttonNext = 'Next';
    },
    startTimer(state, value) {
      // ensure base state
      this.commit('resetTimer');
      console.log('store/startTimer');
  
      state.isTimerRunning = true;
  
      const T = this;
      state.timer.timerId = setInterval(function () {
        T.commit('decrementTimer');
        if (state.timer.seconds <= 0) {
          T.commit('showAnswer');
          T.commit('toggleIsTimerRunning');
          clearInterval(state.timer.timerId); // stop setInterval, Important
        }
      }, 1000);
    },
    toggleGiveMeTacosOrGiveMeDeath(state){
      state.giveMeTacosOrGiveMeDeath = !state.giveMeTacosOrGiveMeDeath;
    }
  };
  
  export const actions = {
    // asyncy things
  };
  