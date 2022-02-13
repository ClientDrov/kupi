<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>
            <div class="modal-title">{{ titleModal }}</div>
            <p class="modal-text">{{ mainTextModal }}</p>
        </div>
    </div>
    <footer class="footer">
        <div class="block__top">
            <div class="container__top">
                <div class="block__top_left">
                    <button type="button" class="btn">Chat with Customer Care</button>
                    <div class="description_top">
                        <img src="../assets/img/icon-24.png" />
                        We are ready to help you at any time seven days a week
                    </div>
                </div>
                <div class="block__top_right">
                    <div class="block__right_content"></div>
                    <div class="block__right_content">
                        <div class="title_content">Company</div>
                        <a href="/" class="link" target="_blank">Contacts</a>
                    </div>
                    <div class="block__right_content">
                        <div class="title_content">Information</div>
                        <a class="link" @click="openModal('Security Statement', 0)">Security Statement</a>
                        <a class="link" @click="openModal('Privacy Policy', 1)">Privacy Policy</a>
                        <a class="link" @click="openModal('Terms & Conditions', 2)">Terms & Conditions</a>
                    </div>
                    <div class="block__right_content"></div>
                </div>
            </div>
        </div>
        <div class="block__bottom">
            <div class="container__bottom">
                <div class="footer__link_none"></div>
                <div class="footer__link">
                    <img src="../assets/img/app_store.svg" class="app_link" alt="" />
                    <img src="../assets/img/play_market.svg" class="app_link" alt="" />
                </div>
            </div>
            <div class="container__bottom">
                <div class="footer__description">
                    © 2011–2022 Our websites: KUPIBILET.ORG - Cheap flights, reservations and online booking
                </div>
                <div class="footer__payment">
                    <div class="payment_icon">
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
    </footer>
</template>

<script>
export default {
    methods: {
        openModal(title, textNumber) {
            this.showModal = true;
            this.titleModal = title;
            this.mainTextModal = this.textModal[textNumber];
        },
    },
    data() {
        return {
            showModal: false,
            titleModal: "",
            mainTextModal: "",
            textModal: [
                `On the website Kupibilet.com you can pay for flights using Ideal, VISA International plastic card or MasterCard. You enter payment data, including your bank card number, on our website, and then the card data is processed by the PayU payment center.

All information you provide is transmitted in encrypted form over a secure SSL communication channel. All transactions on your card are made in full compliance with the requirements of the VISA International and MasterCard payment systems. Website Kupibilet.com meets the requirements of the PCI DSS payment security standard.

3D Secure technology can be used to minimize the risk when making a payment. Thanks to this technology, your card is protected by a one-time password that is only available to you and is valid for one purchase only. A password is sent by SMS when you make a payment.`,
                `What data do we collect?
Depending on how you interact with our services, we may collect or process the following categories of personal data via the three different ways explained above.

Contact Information (your name, address, email address, telephone number and other similar information).
Identification information (copy of your passport or other identity confirming documentation which may contain information like your name, address, gender, nationality and date of birth).
Payments information (your credit or debit card number, expiry date and verification code when you book ticket via our services).
Demographic Information (your age, gender, location and preferred language when you use our services).
Device and Location Information (generic details from your device such as your IP address, type, make, model and operating system of your device)
Usage and Profiling Information (links you have clicked on to be redirected to or from our services, including the identity of the Travel Supplier you are redirecting to and the type of travel service you have selected; and where you've redirected to a Travel Supplier's website or app for the purposes of completing a booking, we may collect information from that Travel Supplier about whether and what you went on to book with them.
How do we collect your data?
Everyone who uses our services will have bits and pieces of information about them collected, stored and processed. However, we don't collect more information than we need.

We collect information in three ways:

You give it to us voluntarily. Information you choose to give us might include personal data needed for you to book ticket for yourself and others.
We generate or collect it automatically. We generate or collect some information from your computer or device automatically as you use our services. This includes stuff like your IP address, information about the device and browser you are using to access our services, the website URL you visited us from. We may also know your location from your mobile or your IP address. This helps us to improve your experience, tailor our customer support services for you and make sure you receive the content that's most relevant to you.
We receive it from third parties. Sometimes we're given information about you from third parties, depending on how you choose to interact with us. For example, when you come to our website via a promotional partner, or when you log into your account using our social network login feature.
Our services are not intended for children under 16 years of age, and no one under the age of 16 should provide any information to, on or via our services.

How will we use your data?
We keep your personal data only for as long as we need to. This depends on why it was collected, or if we have a continuing legal basis to do so (such as to fulfil a contract between us, perform a service you requested or for our legitimate interests). Rest assured, if we no longer have a reason or legal requirement to process your personal data, we will delete it or store it in a way so that it no longer identifies you.

Also, if you have an account with us, we will keep personal data such as your email address, name and other details so you can log in and access our services for as long as you have an account. We may keep other information indefinitely - such as site activity linked to an IP address - which we use to help us understand our travellers, improve our products and services and protect our business interests.

No matter how long the retention period, you can ask us to delete your personal data.

How do we store your data?
Our company reliably stores your data in the territory of the European Union.

Marketing
Our Company would like to send you information about products and services of ours that we think you might like, as well as those of our partner companies.

If you have agreed to receive marketing, you may always opt out at a later date. You have the right at any time to stop Our Company from contacting you for marketing purposes.

What are your data protection rights?
Our Company would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

The right to access – You have the right to request Our Company for copies of your personal data. We may charge you a small fee for this service.
The right to rectification – You have the right to request that Our Company correct any information you believe is inaccurate. You also have the right to request Our Company to complete the information you believe is incomplete.
The right to erasure – You have the right to request that Our Company erase your personal data, under certain conditions.
The right to restrict processing – You have the right to request that Our Company restrict the processing of your personal data, under certain conditions.
The right to object to processing – You have the right to object to Our Company’s processing of your personal data, under certain conditions.
The right to data portability – You have the right to request that Our Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.
If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: privet@kupibilet.ru

Cookies
Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology`,
                `TERMS AND DEFINITIONS

1.1 Kupibilet is the company Ecos Group B.V., the owner of the Website.

1.2 Client is a legally capable natural person aged 18 years or older who is legally entitled to enter into a contractual relationship, including placing an order or making a reservation on the Website, or who is listed as a recipient of services, or who otherwise makes use of services available on the Website.

1.3 Website is a publicly available resource that belongs to Kupibilet and is available on the Internet at: Kupibilet.com as well as as Kupibilet mobile apps through which a Client places an Order.

1.4 Passenger is an individual in whose favor an air carriage agreement has been concluded with a carrier.

1.5 Order - the Client's completed request for the services chosen on the Website and related to the booking and purchase of tickets and services at the desired price (taking into account the price of the services provided by Providers and Kupibilet). Each Order is assigned a number.

1.6 Electronic Ticket, Ticket is an electronic document certifying the contract of air carriage between the Passenger and а Carrier; such document appears as a digital record of the Passenger/luggage carriage in the Carrier's database.

1.7 Itinerary receipt is an extract from automated air transportation registration system containing information on transportation, full details of passenger, route, method and details of payment for transportation, electronic passenger ticket number, booking identifier etc.

1.8 Certificate is an electronic document which confirms the Passenger's entitlement to an itinerary receipt. It is not an electronic ticket and is not valid for a flight. It is used when executing carriage on charter flights.

1.9 Carrier is a legal entity that has the required licences and permits and has assumed an obligation under a carriage agreement to deliver a passenger and their luggage from a point of departure to a point of destination.

1.10 Reservation system is an automated information system which contains information about the schedule of flights, availability of seats, carrier rates and rules of their application, as well as other conditions of the offered services. The information is published on the Website only as it is provided in reservation systems by direct service providers (carriers) or their authorised representatives.

1.11 Client Care Service is the department at Kupibilet that monitors incoming orders and provides feedback to Clients via a feedback form.

1.12 Client's Personal Account - Client's individual section on the Website, which contains confidential information that is accessible only to the individual user, protected by authorisation parameters (username and password).

1.13 Service providers - air, rail and road carriers, accommodation owners, insurance companies, tour operators/ticket agencies.

1.14 Split tickets are separate, independent tickets for connecting flights operated by different airlines on the same route. When purchasing such tickets, Client is aware that the airlines operating each of the flight segments are not linked in any way, i.e. the Passenger is not checked-in to the final destination. Passenger has to check-in and check-in his/her luggage for subsequent flights by himself/herself.

1.15 Metasearch engine, Search Aggregator - a search tool which collects offers of air tickets from many Vendors and displays the information in a common list. The Client purchases a ticket after proceeding to the Website of the selected Vendor.

1.16. Cancellation - urgent cancellation of booking at the request of the Client on the day of ticket issuing. Ticketing time may differ from Moscow time due to the nature of the booking system. Some airlines do not allow cancellation due to technical reasons or have more strict time limitations.As a result, the Client may be refused the cancellation procedure.

2. GENERAL PROVISIONS

2.1 The terms of use of the Website (hereinafter the "Terms") set out the terms of use of the Website.

2.2 If you do not accept all of the terms of these Terms, please do not use this Website.

2.3 Online Service Kupibilet.com enables search, reservation, payment for and purchase of booked services available on the Website.

2.4 The services on the Website are not the property of Kupibilet. The provider of the services presented on the Website is the service provider.

2.5 By taking any action on the Website, such as opening any page, booking or purchasing any service, you accept these Terms unconditionally.

2.6 By agreeing to the Terms and Conditions, the Client confirms that in the case of booking and payment for services for third parties, the Client has all the authority necessary to do so and has received the consent of the third party to share their personal data required for booking and payment for services on the Website with third parties.

2.7 If Kupibilet has reason to believe that you are breaking the Terms, Kupibilet reserves the right to deny or restrict access to the Website without giving a reason.

2.8 All service agreements, information on which is available on the Website, shall be entered into by the Client directly with the service providers providing those services in accordance with Russian and international law.

2.9 Third party (airlines) services booked by the Client for air transportation shall be governed by the rules of the relevant Carrier and the applicable tariff. Fares for international destinations which are non-refundable in the event of Passenger cancellation of carriage shall be subject to international air carriage regulations and the rules of the relevant Carrier.

2.10 Kupibilet reserves the right to make changes to these Terms unilaterally. All offers, prices, and sales conditions posted in the Kupibilet reservation system are subject to change without notice to the Client, limited in time, availability of seats and pre booking dates, travel dates, minimum or maximum stay at the destination, weekend and holiday factors, seasonal price fluctuations, waiting lists, and limited by strikes and temporary non-operational reservation systems and / or subject to other changes, conditions and restrictions.

2.11 The Booking System is a dynamic system whose components can be changed or supplemented at any time, and the Client is therefore advised to use the reservation system in "as is" mode. The Client monitors the changes independently; no additional notification is sent to the Client from Kupibilet or third parties offering services on the Website regarding changes in the conditions. In the event of total or partial inoperability of the system or its components for any length of time, and in the event that the Client cannot access the system or incurs any direct or indirect costs due to these circumstances, Kupibilet does not assume any liability to the Client.

2.12 Since Kupibilet does not control the transmission of data over the entire internet through the networks of commercial access operators and cannot know the security level of the information on the computer used by the Client, Kupibilet does not offer the Client any guarantees for the secure transmission of information over the internet from the Client's computer to the Website. The Client uses the internet at his or her own risk and is obliged to take measures to protect his or her personal information and personal computer from unauthorised access by third parties.

3. SERVICES PROVISION PROCEDURE. USE OF THE BOOKING SYSTEM

3.1 Prior to booking the services available on the Website, the Client undertakes to familiarise himself with these Terms and Conditions of Service, their costs, the rules of application of tariffs and other necessary information available during the booking process. Only if the client agrees to these Terms, the rules for the application of tariffs, the rules for the provision of services established by the service providers, the client may proceed with the booking and payment for the services. Payment for services means unconditional acceptance of the rules and procedure for the implementation of the services presented on the Website.

3.2 To place an order on the Website, the Client must complete an online booking form.

3.3 The Client confirms the accuracy of the personal data entered on the Website and the data of the Passengers for whom they are purchasing the Ticket and accepts full responsibility for its accuracy, completeness and validity.

3.4 The Client undertakes not to disclose to third parties the username and password indicated when registering on the Website and shall take all necessary measures to keep this information confidential. In the event that Client suspects the security of his username and password or the possibility of their unauthorised use by third parties, Client shall immediately change his password via the personal account.

3.5 The services on the Website are only provided by the Service Providers if the Client has paid in full for the relevant services.

3.6 After the Client has paid for the services and the fees of Kupibilet or the service providers, the money has been transferred to the relevant bank account and the ticket has been issued, the air transport contract shall be deemed to have been concluded.

3.7 The services are deemed duly and fully provided after the itinerary receipt confirming the conclusion of the air carriage contract between the Passenger and the carrier, containing complete information about the passengers, the route and cost of the air carriage and additional services, is sent to the e-mail address provided by the Client when the Order is submitted. Kupibilet is only responsible for sending the itinerary receipt to the e-mail address of the Client, but cannot trace the postal service and guarantee that the letter is delivered. It is the Client's responsibility to check the availability and serviceability of the e-mail indicated. If the itinerary receipt is not received within 24 hours after payment, the Client must contact Kupibilet to receive the letter again or to check the status of the order.

3.8 In the case of payments made with a bank card, Kupibilet reserves the right to refuse to provide the service or to additionally request copies of the documents and the cardholder's authorisation code if there is reason to believe that the bank card transaction used to pay for the reservation may be fraudulent.

3.9 Conditions of any changes in e-tickets issued for travel, including refund and exchange are regulated by the rules on tariff application for a given service, the contract of air transportation with the airline, these Terms, service agreements with providers, he Air Laws Regulations of the Russian Federation, as well as other laws and regulations, international agreements and can impose penalties on the Client.

3.10 The Client must familiarise himself with the rules of passenger and luggage carriage of the airlines involved in the carriage of the passenger on the chosen flights before the purchase of the ticket. Among other things, the Client must familiarise himself with the rules of check-in for the flight and the tariffs set by the carrier for excess luggage, check-in and other possible charges for the selected flights. The rules of the carrier can be found on the airline's Website or by contacting the airline by any available means.

4. ORDER PLACEMENT PROCEDURE

4.1 The order is placed by the client on the Website independently in accordance with the terms of the agreements with the service providers, the terms specified in these Terms and Conditions and the instructions published on the Website.

4.2 In addition to the fare consisting of the fare/combination of fares and charges imposed by the Carrier, the price of a ticket offered for purchase on the Website may include, inter alia, the fees of the Suppliers.

4.3 The booking procedure consists of three steps.

The first stage consists in the selection of the best option for the Client, familiarisation with the conditions of this contract, the rules of carriage and the tariff rules of the air carrier of interest to the Client.

The second step is the pre-booking of seats/tickets for the flight selected by the Client. At this stage, the Client selects the form of payment and pays the amount of money specified in the generated Order. The specified sum includes the cost of services provided by Kupibilet and/or suppliers (agencies) as well as an advance payment equal to the provisional price of the airline ticket. The Client can pay for the booked airline ticket during the period indicated on the Website at the time of reservation. However, the airline may change the payment deadline for the booked air ticket within 24 hours, about which Kupibilet will notify the Client by sending an e-mail to the e-mail address entered during registration.

In the third stage, if the carrier's offer stated in the Order is available, the ticket is issued. In exceptional cases, if the carrier's offer indicated in the Order is not available, the ticket will be issued after further agreement with the Client on an alternative offer and a surcharge to an appropriate class (if necessary).

4.4 When placing an order, the Client shall complete all of the fields indicated on the Website as mandatory. Passengers' names and surnames, numbers, series of identity documents shall be entered by the Client in the order form exactly as written in the passport/foreign passport, if this is the document to be presented at check-in.

4.5 Orders placed by the Client shall be final. Immediately after receipt of a completed order from the Client, an email will be sent to the Client with the details of the order. The Client must then make the payment. In some cases, tickets will be issued within 24 hours of payment for the Order.

4.6 Kupibilet strongly recommends that the Client, after receiving the email with the booking details, contact the Client care service in a special chat on the Website or in the Kupibilet app to check and clarify the information received from the Client, because Kupibilet cannot give comprehensive information about the flight electronically due to technical difficulties. If the Client has not contacted the Client care service, no claims will be accepted from the Client concerning booking errors, Client's losses, travel disruption, etc.

4.7 After payment of the order, the Client must ensure that an itinerary receipt is received within 24 hours. The itinerary receipt confirms that a ticket has been issued to the Client/passengers under the paid order. The itinerary receipt is sent to the email address indicated in the order. If the Client does not receive the itinerary receipt, he/she must contact Kupibilet Client Care to clarify the reasons and confirm that the ticket has been issued.

4.8 Changes to the personal data of the Client and/or any of the passengers, such as name and surname, date of birth, in the issued order will result in the cancellation of the order/loss of the strength of the fares agreed in the order, as in order to change these passenger data in the order, the order must be cancelled and a new one issued. If the order has been paid for and the tickets issued on it, the refund will be made in accordance with clause 6 and all fines determined by the carrier and the service fees of Kupibilet and/ or its suppliers (agencies) will be deducted. The client thereby assumes all possible commercial risks (new bookings, fare changes, refunds/non-refunds, etc.) due to errors, inaccuracies in the personal information provided.

4.9 If the client makes mistakes in the choice of flights and/or dates, the return and reissue of the ticket will be performed in accordance with clause 6 and all fines determined by the carrier as well as the service fees of Kupibilet and/or the Suppliers (agencies) will be deducted. The Client thereby assumes all possible commercial risks (issuing a new order, fare changes, refunds/non-refunds, etc.) related to his error actions.

4.10 No advance booking is complete until the Client has paid for the booking and does not guarantee the availability of seats at the specified fare and may be cancelled at the request of the carrier at any time.

4.11 As soon as the booking has been paid for, the Client agrees to all conditions, obligations and restrictions relating to air carriage.

4.12 If the Client wishes to change or cancel an order for which no tickets have been issued, the Client shall immediately contact Kupibilet to carry out the said actions. In the event that tickets have been issued on the order, the Client may perform the refund procedure by following the steps described in the Ticket Refund section on the Website.

4.13 The Client booking multiple tickets or tickets for third parties/passengers must provide all passengers participating in this flight with all conditions of carriage and other necessary information. Claims of Passengers and the Client to Kupibilet for failure to notify them of the conditions of carriage and failure to receive other necessary information will not be accepted.

4.14 No multiple bookings (orders) with overlapping travel dates involving the same carriers may be created for a single Client/passenger. The simultaneous existence of several orders with overlapping dates involving the same carriers is called a "double booking". In the event of a double booking, the airline shall have the right to cancel all duplicate bookings without prior notice, including those for which tickets have already been issued.

4.15 In the case referred to in Clause 4.14, the refund will be made in accordance with Clause 6 with the deduction of all penalties determined by the carrier as well as the service fees of Kupibilet or the Suppliers. Therefore, the Client assumes all possible commercial risks (issuing a new reservation, fare changes, refund/non-refund, etc.) associated with his actions of creating a "double booking" for any of the passengers.

4.16 When the Client creates an order, the Client must be aware that all flights must be operated strictly in the sequence in which they are specified in the booking. Failure by the Client/passengers to attend any of the flights will result in the cancellation of all subsequent flights (flight segments) without refund of the price paid, except for the purchase of SPLIT-TICKETS.

4.17 In the process of selecting the flight itinerary it must be remembered that the Client/passenger must find out all visa formalities and requirements for crossing the borders of the countries affected in the carriage on his own. Also in case the Client/passenger is travelling with luggage, he/she shall find out the rules of luggage transfer at the transit point by himself/herself.

4.18 Not all fares allow refund and reissue of the purchased ticket.  For more information, please refer to Clause 16 of the fare rules. If the Client is interested in the rules for returning and reissuing a ticket for the selected flight option, you must read these rules in advance in the Refund and Exchange Terms section on the payment page or check with the Client Center before payment.

4.19. In case the Client/passenger is planning to carry special luggage (for example, animals, sports equipment, oversized cargo, etc.), a request for permission for such luggage must be sent by the Client before paying for the ticket. Confirmation of the possibility of carriage of such luggage must be received from the carrier prior to the issuance of the ticket, as it may be refused.

4.20  In case the Client and/or passenger is a person with a special condition or in respect of whom special conditions of transportation must be applied (pregnant women, passengers with reduced mobility or requiring special medical attention, etc.), then in such cases the carriage must be agreed with the airline, by sending a request through the reservation system before the ticket is issued and paid for.

4.21 In the cases referred to in clauses 4.19, 4.20, the Client shall inform Kupibilet in any way about the special condition of the Client/passenger or the special requirements for the transportation of the Client/passenger, and about the special luggage they have before making the reservation on the Website. Resume of the reservation and payment of the ticket price can only be made after Kupibilet has received confirmation of the possibility of such transportation, as the request may be rejected by the carrier.

4.22 The client is prohibited from transferring or selling tickets to third parties.

4.23 The main method of communication between Clients and Customer Care is through chat on the Website and mobile apps. When registering on the Website or placing an Order, the Client shall specify a valid e-mail address at which the Client can be contacted promptly. Depending on the workload of the Client Care Service employees, the response time can take up to the date of departure of the aircraft.  If more urgent consultation on a particular flight is required, the Client is advised to contact the airline directly.

4.24. If at the time of paying for/purchasing a ticket an error occurs, the Client service department should be contacted immediately and no new attempts should be made to buy the ticket on the Kupibilet. Website or another Website until after receiving information from the Client service department about the reasons for the error and instructions for further action.`,
            ],
        };
    },
};
</script>

<style scoped>
.footer {
    background: #ffffff;
    border-top: 1px solid #dde3eb;
}
.block__bottom {
    width: 1176px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 42px 0;
    border-top: 1px solid #dde3eb;
}
.container__bottom {
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.container__top {
    width: 1176px;
    margin: 0 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 42px 0;
}

.block__top_left {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}

.block__top_right {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 60%;
    flex-wrap: wrap;
    justify-content: flex-end;
    -webkit-box-pack: end;
    flex-basis: 60%;
    max-width: 90%;
}

.btn {
    font-family: inherit;
    border: none;
    outline: none;
    margin: 0;
    display: inline-block;
    color: #007acc;
    background: #f0f5fa;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    transform: translateZ(0);
    border-radius: 8px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    transition: 0.15s ease-out;
    transition-property: opacity, box-shadow;
}

.description_top {
    display: flex;
    margin-top: 12px;
    max-width: 240px;
    color: #6a7280;
}

.description_top > img {
    width: 32px;
    height: 32px;
    margin-top: 5px;
    margin-right: 8px;
}

.block__right_content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    -webkit-box-flex: 1;
    flex-basis: 33.3%;
    max-width: 33.3%;
}

.title_content {
    font-weight: 600;
    margin-bottom: 12px;
}

.link {
    transition: 0.15s ease-out;
    display: inline-flex;
    align-items: center;
    color: #007acc;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    transition-property: color;
    display: inline-block;
    font-weight: 400;
    margin-bottom: 12px;
}

.footer__link_none {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-direction: column;
}

.footer__link {
    flex-grow: 1;
    max-width: 27%;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: flex-start;
    -webkit-box-flex: 1;
    -webkit-box-pack: end;
}

.app_link {
    cursor: pointer;
    height: 40px;
    width: 135px;
    margin-right: 18px;
}

.footer__description {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 40%;
}

.footer__payment {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 60%;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.payment_icon {
    display: flex;
    margin-top: 24px;
}

.payment_icon > img {
    margin-right: 20px;
}

.icon_1 {
    height: 30px;
    width: 69px;
}

.icon_2 {
    height: 30px;
    width: 58px;
}

.icon_3 {
    height: 30px;
    width: 40px;
}

.icon_4 {
    height: 30px;
    width: 53px;
}

.icon_5 {
    height: 30px;
    width: 40px;
}

@media screen and (max-width: 1199px) {
    .block__top {
        display: flex;
        -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }
    .block__bottom {
        border-top: none;
        flex-direction: column;
        margin: 0 18px;
        padding: 24px 0;
        width: auto;
    }
    .container__top {
        margin: 0 18px;
        padding: 24px 0;
        width: auto;
        border-top: none;
    }
    .block__top_left {
        -ms-flex-pack: justify;
        justify-content: space-between;
        align-items: center;
    }
    .description_top {
        display: none;
    }
    .title_content {
        margin-top: 9px;
    }
    .container__bottom {
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }
    .footer__link {
        max-width: 70%;
    }
    .block__top_right {
        max-width: 80%;
    }
    .container__bottom {
        flex-direction: column;
    }
    .footer__description {
        max-width: 80%;
        margin: 20px 0;
    }
    .footer__payment {
        max-width: 100%;
    }
}
@media screen and (min-width: 600px) and (max-width: 1199px) {
    .block__top_right {
        margin-top: 24px;
        max-width: none;
    }
    .block__right_content {
        max-width: 15%;
        flex-basis: 25%;
    }
}

@media screen and (max-width: 473px) {
    .footer__link {
        max-width: 100%;
    }
}

.modal {
    position: fixed;
    z-index: 10;
    padding-top: 80px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 20px;
    padding: 30px;
    max-width: 800px;
}

.modal-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
}

.modal-text {
    color: #333;
    font-size: 16px;
    white-space: pre-wrap;
}

.close {
    color: #aaa;
    float: right;
    font-size: 40px;
    font-weight: bold;
    margin-top: -15px;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}
</style>
