<script setup>
import { Effect, Webcam, Image, Player, Module, VideoRecorder, ImageCapture, Dom } from "https://cdn.jsdelivr.net/npm/@banuba/webar/dist/BanubaSDK.browser.esm.min.js"

var init = async () => {
  const [player, modules] = await Promise.all([
    Player.create({
      clientToken: "0EOuU5qV8q+n5lu5i2ewrzRKfl6KoEI4M7W1GH3HmBnIrkvZ5UFkfyXBArfdDPJ+ruILLhDjOrIbQji4RQLoFqZ6zIvTZOOVAcdrM/qGgzdNiv1jLHq12mexlUOOm7mxDBeuccYFsN5AggiYDzhEQAD42AxMTvFOvMP+3tmO8h9yOzUbFjK4AlOFL0jWE703NrxoOfEs74ePct64gi/ONAJ6K1D8GLLsWUKBzXHS+hyzGqxuj9yiOJsLtoxZp2Pp2Hs/r+Id2/7WwqUx4N3+g75l5B1UwBsQv73urcNXlx4AeW+3p5opSq9L4TGg0+ZrRBvzffK5uUkZyaDTNmyca7Bxn4Xq9RAcNUtdijPckDB9Z1kGxCTsnEtYif1xEk0tEfAfowi5yzbo7N2XajwXILQu8/PoX4DpARNghaVXd49g3w8Ohwmc0o7Tek5pHZ/RIELO4rdBK9vtONV+2RsmnpXzoWRg4curzydcK+E+8VW3vUtvRFjRcS900u0Ot1JZWXhfB5x/4hTnFKzez3PKcvLzahAgNV1JNsg=",
    }),
    // Find more about available modules:
    // https://docs.banuba.com/face-ar-sdk-v1/generated/typedoc/classes/Module.html
    Module.preload(["face_tracker", "background", "hair"].map(m => `https://cdn.jsdelivr.net/npm/@banuba/webar/dist/modules/${m}.zip`)),
  ])
  await player.addModule(...modules)

  player.use(new Webcam())
  Dom.render(player, "#webar-app")

  var Hipster = await Effect.preload(`./src/assets/effects/Hipster1.zip`)
/*   var Hipster2 = deepClone(Hipster1) */
  var face_low_BaseColor1 = await Effect.preload(`./src/assets/effects/face_low_BaseColor1.zip`)
  var face_low_BaseColor2 = await Effect.preload(`./src/assets/effects/face_low_BaseColor.zip`)
  return (name) => {
    if(name === 'Hipster1') {
      Hipster._resource._data['images/face_low_BaseColor.png'] = face_low_BaseColor1._resource._data['face_low_BaseColor.png']
      player.applyEffect(Hipster)
    }
    if(name === 'Hipster2') {
      Hipster._resource._data['images/face_low_BaseColor.png'] = face_low_BaseColor2._resource._data['face_low_BaseColor.png']
      player.applyEffect(Hipster)
    }
  }
}
var f
init().then( res => {
    f = res
})

</script>

<template>
    <div style="text-align:center;">
        <div id="webar-app" style="width:70%;height: 45%;display:inline-block;"></div>
    </div>
    <p style="text-align:center;">
        <el-button @click="f('Hipster1')" type="primary">????????????</el-button>
        <el-button @click="f('Hipster2')" type="primary">????????????</el-button>
    </p>
</template>
