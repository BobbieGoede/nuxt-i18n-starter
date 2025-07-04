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
  { code: 'en', file: 'en-3.json' },
  { code: 'en', file: 'en-2.json' },
  { code: 'en', file: 'en-1.json' }
],
			</pre>
			<p>The order is [3,2,1]</p>
			<p>The `langDir` is irrelevant, we extract it from `_layers`</p>
		</section>
  </div>
</template>

<style>
:root {
	font-family: 'Helvetica', sans-serif;
}
</style>
