<template>
	<button
		v-if="cover === null"
		class="upload-image rounded bg-grey-lighten-4 d-flex justify-center align-center"
		@click="selectFile"
	>
		<v-icon icon="mdi-image-plus" />
	</button>
	<div
		v-else
		class="preview-image"
	>
		<v-img
			:src="cover"
			class="rounded"
			cover
			aspect-ratio="1"
			:transition="false"
		/>
		<div class="preview-image-buttons">
			<v-btn
				icon="mdi-delete"
				class="mr-4"
				@click="removeCover"
			/>
			<v-btn
				icon="mdi-reload"
				@click="selectFile"
			/>
		</div>
	</div>

	<!-- Hidden file input -->
	<input
		ref="fileInput"
		type="file"
		:accept="CoverFileConfig.acceptList"
		class="d-none"
		@change="extractFilesFromFileInput"
	>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useReleaseStore } from "@/stores/release";
import { CoverFileConfig  } from "@/common/fileConfig"; 

export default defineComponent({
	setup() {
		return { CoverFileConfig };
	},
	computed: {
		...mapState(useReleaseStore, ["cover"]),
	},
	methods: {
		...mapActions(useReleaseStore, ["addCover", "removeCover"]),
		selectFile() {
			const fileInput = this.$refs.fileInput as HTMLInputElement;
			fileInput.click();
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		extractFilesFromFileInput(e: any) {
			const files = e.target?.files;
			if (files && files[0]) {
				this.addCover(files[0]);
			}
		},
	},
});
</script>

<style lang="scss" scoped>
$size: 220px;

.upload-image {
	min-width: $size;
	height: $size;
}

.preview-image {
	position: relative;
	min-width: $size;
	height: $size;

	&-buttons {
		visibility: hidden;

		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: $size;
		height: $size;
	}
}

.preview-image:hover .preview-image-buttons {
	visibility: visible;
}

</style>
