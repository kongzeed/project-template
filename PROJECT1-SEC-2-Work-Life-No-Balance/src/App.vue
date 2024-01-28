<script setup>
import { ref } from 'vue'

const [dice1, dice2, dice3] = [ref(1), ref(1), ref(1)]
const [resultP1, resultP2] = [ref(0), ref(0)]
const [player1Score, player2Score] = [ref(0), ref(0)]
const currP = ref(1)

const randomNumber = () => Math.floor(Math.random() * 6) + 1
const calculatePlayerResult = () => {
  return dice1.value + dice2.value + dice3.value
}

const roll3Dice = () => {
  ;[dice1.value, dice2.value, dice3.value] = [
    randomNumber(),
    randomNumber(),
    randomNumber()
  ]

  if (currP.value === 1) {
    resultP1.value = calculatePlayerResult()
  } else if (currP.value === 2) {
    resultP2.value = calculatePlayerResult()
  }
}

const resetGame = () => {
  ;[dice1, dice2, dice3, currP].forEach((refValue) => (refValue.value = 1))
  ;[resultP1, resultP2, player1Score, player2Score].forEach(
    (refValue) => (refValue.value = 0)
  )
}
</script>

<template>
  <div
    id="bg"
    class="bg-from-inherit w-screen h-screen flex justify-center items-center overflow-hidden"
    style="
      background: var(--bg, linear-gradient(297deg, #ff00d6 0%, #ff6b64 65.5%));
    "
  >
    <div
      id="board"
      class="w-[640px] shadow-lg h-[340px] bg-btn-none-active rounded-[20px] flex flex-col overflow-hidden scr-m:w-[961.15px] scr-m:h-[550px] scr-l:w-[1246px] scr-l:h-[713px]"
    >
      <div
        id="display"
        class="bg-White h-[30%] scr-m:h-[33%] flex justify-between"
      >
        <div
          id="display-p1"
          class="w-[204.944px] scr-m:w-[307.78px] scr-l:w-[400px] shadow-xl bg-Main-pink-100 rounded-tr-[20px] flex flex-col justify-center items-center pt-[15px]"
        >
          <h2 class="text-hm scr-m:text-hm-tal scr-l:text-hm-des text-Black">
            PLAYER 1
          </h2>
          <h1
            class="text-hl scr-m:text-hl-tal scr-l:text-hl-des text-Main-pink-300"
          >
            {{ resultP1 }}
          </h1>
        </div>
        <div
          id="display-dice"
          class="flex flex-col py-2 scr-l:pt-[19px] gap-2 scr-m:gap-[22px] items-center"
        >
          <button
            class="text-hss scr-m:text-hs-tal scr-l:text-hs-des shadow-lg text-Black hover:bg-btn-hover btn btn-xs bg-btn-active px-0 border-0 scr-m:h-[39px] w-full scr-m:w-max scr-m:px-[15px] scr-m:rounded-[30px] scr-l:w-[200px] scr-l:h-[50px]"
            @click="resetGame"
          >
            🆕 NEW GAME
          </button>
          <div id="dices " class="flex gap-3 scr-m:gap-[32px]">
            <img
              class="h-[54px] scr-m:h-[81px] scr-l:h-[105px] scr-l:rounded-[30px] rounded-[20px] scr-m:rounded-[30px] shadow-lg"
              :src="'/src/assets/images/dice-' + dice1 + '.png'"
              :alt="'dice' + dice1"
            />
            <img
              class="h-[54px] scr-m:h-[81px] scr-l:h-[105px] scr-l:rounded-[30px] rounded-[20px] scr-m:rounded-[30px] shadow-lg"
              :src="'/src/assets/images/dice-' + dice2 + '.png'"
              :alt="'dice' + dice2"
            />
            <img
              class="h-[54px] scr-m:h-[81px] scr-l:h-[105px] scr-l:rounded-[30px] rounded-[20px] scr-m:rounded-[30px] shadow-lg"
              :src="'/src/assets/images/dice-' + dice3 + '.png'"
              :alt="'dice' + dice3"
            />
          </div>
        </div>
        <div
          id="display-p2"
          class="w-[204.944px] scr-m:w-[307.78px] scr-l:w-[400px] shadow-xl bg-Main-pink-200 rounded-tl-[20px] flex flex-col justify-center items-center pt-[15px]"
        >
          <h2 class="text-hm scr-m:text-hm-tal scr-l:text-hm-des text-Black">
            PLAYER 2
          </h2>
          <h1
            class="text-hl scr-m:text-hl-tal scr-l:text-hl-des text-Main-pink-300"
          >
            {{ resultP2 }}
          </h1>
        </div>
      </div>
      <div
        id="controller"
        class="bg-Main-pink-300 flex flex-auto justify-center relative"
      >
        <div
          id="controller-p1"
          class="w-1/2 bg-Main-pink-100 flex flex-col px-3 py-5 scr-l:pb-[64px] scr-l:pr-[29px] scr-l:pl-[93px] gap-[35px] scr-m:gap-[70px] justify-end"
        >
          <div
            id="cp-p1"
            class="ml-[47px] scr-l:ml-0 mr-auto w-[108px] h-[69px] bg-Main-pink-300 rounded-[20px] flex flex-col justify-center items-center text-White scr-m:h-[101.823px] scr-m:w-[162.763px] scr-l:w-[211px] scr-l:h-[132px]"
          >
            <p class="text-hss scr-m:text-hs-tal scr-l:text-hs-des">CURRENT</p>
            <p class="text-hs scr-l:text-hm-des scr-m:text-hm-tal">
              {{ player1Score }}
            </p>
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-Black px-1 scr-m:text-hs-tal scr-l:text-hs-des">
              ITEMS
            </p>
            <div
              id="items-p1 p-[2px]"
              class="max-w-auto h-[45px] rounded-[10px] flex p-1 gap-1 bg-White text-hss scr-m:text-hs-tal scr-l:text-hs-des text-White scr-m:h-[63.49px] scr-l:h-[71px] scr-m:rounded-[20px]"
            >
              <div
                class="item btn btn-sm border-0 bg-Main-pink-300 rounded-[10px] w-[38px] h-auto flex justify-center items-center p-[1px] scr-m:w-[57.49px] scr-l:w-[64px] scr-m:rounded-[20px]"
              >
                <p class="text-center text-White">!1</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="controller-p2"
          class="w-1/2 bg-Main-pink-200 flex flex-col px-3 py-5 scr-l:pb-[64px] scr-l:pr-[93px] scr-l:pl-[29px] gap-[35px] scr-m:gap-[70px] justify-end"
        >
          <div
            id="cp-p2"
            class="ml-auto mr-[47px] scr-l:mr-0 w-[108px] h-[69px] bg-Main-pink-300 rounded-[20px] flex flex-col justify-center items-center text-White scr-m:h-[101.823px] scr-m:w-[162.763px] scr-l:w-[211px] scr-l:h-[132px]"
          >
            <p class="text-hss scr-m:text-hs-tal scr-l:text-hs-des">CURRENT</p>
            <p class="text-hs scr-m:text-hm-tal scr-l:text-hm-des">
              {{ player2Score }}
            </p>
          </div>

          <div class="flex flex-col gap-1">
            <p
              class="text-Black text-end px-1 scr-m:text-hs-tal scr-l:text-hs-des"
            >
              ITEMS
            </p>
            <div
              id="items-p2 p-[2px]"
              class="max-w-auto h-[45px] ; rounded-[10px] flex p-1 gap-1 flex-row-reverse bg-White text-hss scr-m:text-hs-tal scr-l:text-hs-des text-White scr-m:h-[63.49px] scr-l:h-[71px] scr-m:rounded-[20px]"
            >
              <div
                class="item btn btn-sm border-0 bg-Main-pink-300 rounded-[10px] w-[38px] scr-l:w-[64px] scr-m:w-[57.49px] scr-m:rounded-[20px] h-auto flex justify-center items-center p-[1px]"
              >
                <p class="text-center text-White">2X<br />%50</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="btns"
          class="absolute flex flex-col gap-[16px] mt-5 scr-m:mt-20 scr-l:mt-[125px] items-center"
        >
          <button
            id="btn-roll"
            class="btn w-[75px] scr-m:w-[166px] hover:bg-btn-hover bg-btn-active h-[60px] scr-m:h-max p-0 border-0 text-hss scr-m:text-hs-tal scr-l:text-hs-des text-Black flex flex-col scr-m:flex-row items-center scr-m:rounded-[30px] scr-l:w-[200px]"
            @click="roll3Dice"
            :disabled="player1Score >= 20 || player2Score >= 20"
          >
            <p>🎲 ROLL</p>
            <p>DICE</p>
          </button>
          <button
            id="btn-hold"
            class="btn w-[75px] scr-m:w-[113px] hover:bg-btn-hover scr-m:h-max bg-btn-active h-[60px] p-0 border-0 text-hss scr-m:text-hs-tal scr-l:text-hs-des text-Black flex flex-col scr-m:rounded-[30px] scr-l:w-[136px]"
          >
            <p>📥 Hold</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
