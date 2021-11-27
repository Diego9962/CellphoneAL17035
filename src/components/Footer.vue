<template>
  <div>
    <v-footer>
      <v-card flat tile width="100%" class="red white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Desarrollado por:
          <strong> DIEGO ALEJANDRO ALVAREZ LOPEZ AL17035</strong>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Fundamentos de la programaciòn en internet
          <strong> Universidad de El Salvador</strong>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>© All Right Reserved</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
