<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            MLSA
          </h4>
          <span>De 15/12/1995 — 31/12/2020 </span>
          <p class="timeline-item-desc">
            Bar-le-duc
          </p>
        </li>       
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            AlvaraDigital
          </h4>
          <span>Depuis 01/01/2021</span>
          <p class="timeline-item-desc">
            Bar-le-duc
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>
