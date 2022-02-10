<template>
  <div class="bg-app-white md:px-28 px-5 mt-20">
      <div
        v-bind:class="{ 'mb-28' : index === panelList.length - 1 }"
        class="md:px-2 w-full cursor-pointer"
        v-for="(character, index) in panelList"
        :key="character.panelName"
      >
        <div class="app-divider"></div>
        <div class=" h-24 table w-full panel-border-top" @click="characterItemClick(index)">
          <div
            class="table-cell align-middle uppercase py-11 text-black"
          >
            <p class="text-xl font-acumin">
              {{ character.panelName }}
            </p>
          </div>
          <div class="table-cell align-middle w-20">
            <img
              class="flex float-right hidden"
              src="~/assets/images/svg/close.svg"
              :data-close-id="index"
            />
            <img
              class="flex float-right block"
              src="~/assets/images/svg/arrow-black.svg"
              :data-arrow-id="index"
            />
          </div>
        </div>
        <div
          :data-character-id="index"
          class="text-white hidden flex mb-14"
        >
          <div class="md:flex justify-center md:space-x-6 lg:space-x-12">
            <div class="flex flex-col items-start justify-center lg:w-sixty">
              <p class="text-sm text-black font-acumin tracking-wider">
                {{ character.panelDetails }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "FAQPanelSection",
  data() {
    return {
      open: false,
      panelList: [
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
        {
          panelName: "What is Membership Collective Group?",
          panelDetails:
            "The Membership Collective Group (MCG) is a global membership platform of physical " +
            "and digital spaces that connects a vibrant, diverse and global group of members. " +
            "These members use the MCG platform to work, socialize, connect, create and flourish all " +
            "over the world. We began with the opening of the first Soho House in 1995 and remain the only " +
            "company to have scaled a private membership network with a global presence. Members around the world " +
            "engage with MCG through our global collection of 30 Soho Houses, 9 Soho Works, The Ned in London, " +
            "Scorpios Beach Club in Mykonos, Soho Home – our interiors and lifestyle retail brand – and our digital channels." +
            " The LINE and Saguaro hotels in North America also form part of MCG’s wider portfolio.",
        },
      ],
    };
  },
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelectorAll(
        '[data-character-id="' + characterIndex + '"]'
      )[0];
      const arrowElement = document.querySelectorAll(
        '[data-arrow-id="' + characterIndex + '"]'
      )[0];
      const closeElement = document.querySelectorAll(
        '[data-close-id="' + characterIndex + '"]'
      )[0];
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.remove("block");
        characterInfoElement.classList.add("hidden");
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
      }
      if (
        arrowElement.classList.contains("block") &&
        closeElement.classList.contains("hidden")
      ) {
        arrowElement.classList.remove("block");
        arrowElement.classList.add("hidden");
        closeElement.classList.remove("hidden");
        closeElement.classList.add("block");
      } else {
        arrowElement.classList.remove("hidden");
        arrowElement.classList.add("block");
        closeElement.classList.remove("block");
        closeElement.classList.add("hidden");
      }
    },
  },
};
</script>

<style scoped>
  .panel-border-top{
    border-top: 1px solid #233328;
  }
  .panel-border-bottom{
    border-bottom: 1px solid #233328;
  }

</style>
