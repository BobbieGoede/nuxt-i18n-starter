<script setup lang="ts">
</script>

<template>
  <div>
		<section>
			<h3>Messages</h3>
			<p>
				{{ $t('welcome') }}
			</p>
			<p>{{ $t('firstModuleMessage') }}</p>
			<p>{{ $t('secondModuleMessage') }}</p>
			<p>{{ $t('thirdModuleMessage') }}</p>
		</section>
		<section>
			
			<h3>Config</h3>
			
			<p>See logs - the merged locales array looks like:</p>
			<pre>
locales: [
  { code: 'en', file: 'PATH/modules/2.second-module/locales/en.json' },
  { code: 'en', file: 'PATH/modules/1.first-module/locales/en.json' },
  { code: 'en', file: 'PATH/layers/my-layer/modules/3.third-module/locales/en.json' }
],
			</pre>
			<p>The order is [2,1,3]</p>
			<p>Only one of the `langDir` options is visible to the i18n module:</p>
			<pre>
langDir: 'PATH/nuxt-i18n-starter/modules/2.second-module/locales',
			</pre>
		</section>
  </div>
</template>

<style>
:root {
	font-family: 'Helvetica', sans-serif;
}
</style>
