<template>
  <main class="mt-24 mb-24">
    <div class="mx-16 mb-12 title">FROM THE CLUB</div>
    <div class="flex space-x-6 mx-16">
      <div class="flex flex-col space-y-3">
        <img src="~/assets/images/panel-1.png" alt="" />
        <h1 class="card-header-text">Dia de los Muertos party</h1>
        <p class="card-subheader-text">tulum, mexico</p>
      </div>
      <div class="flex flex-col space-y-3">
        <img src="~/assets/images/panel-2.png" alt="" />
        <h1 class="card-header-text">G | Club Fashion Week Penthouse</h1>
        <p class="card-subheader-text">new york, ny</p>
      </div>
      <div class="flex flex-col space-y-3">
        <img src="~/assets/images/panel-3.png" alt="" />
        <h1 class="card-header-text">Supercar Testing with McLaren</h1>
        <p class="card-subheader-text">monaco</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button class="flex button justify-center items-center mt-20">
        <div class="button-text">FOLLOW ALONG</div>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "FromTheClub",
};
</script>

<style scoped>
.button {
  cursor: pointer;
  width: 337px;
  height: 64px;
  left: 552px;
  top: 3567px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
}

.button-text {
  font-family: Acumin Variable Concept;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.title {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 382;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}

.card-header-text {
  font-family: IvyPresto Display;
  font-style: normal;
  font-weight: 200;
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  color: #ffffff;
}

.card-subheader-text {
  font-family: Acumin Variable Concept;
  font-style: normal;
  font-weight: 382;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.65;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
}
</style>
