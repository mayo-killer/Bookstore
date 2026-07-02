<template>
  <div class="photo-wall" :style="backgroundStyle">
    <NavBar />
    
    <main class="photo-container">
      <h1>漫画照片墙</h1>
      
      <div class="photo-grid">
        <div 
          v-for="(photo, index) in photos" 
          :key="index" 
          class="photo-item"
        >
          <img :src="photo.url" :alt="'游客照片' + (index + 1)" class="photo">
        </div>
      </div>
      
      <div class="upload-section">
        <h2>上传你的照片</h2>
        <input 
          type="file" 
          accept="image/*" 
          @change="handleFileUpload" 
          ref="fileInput"
          class="upload-input"
        >
        <button @click="triggerFileInput" class="upload-btn">选择照片</button>
        <button 
          @click="uploadPhoto" 
          :disabled="!selectedFile" 
          class="upload-btn"
        >
          上传照片
        </button>
        <p v-if="uploadStatus" class="status-message">{{ uploadStatus }}</p>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PhotoWallView',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      photos: [
        { url: require('@/assets/wall/qm2.jpg') },
        { url: require('@/assets/wall/qm3.jpg') },
        { url: require('@/assets/wall/jo3.jpg') },
        { url: require('@/assets/wall/gm3.jpg') },
        { url: require('@/assets/wall/jo6.jpg') },
        { url: require('@/assets/wall/jo5.jpg') },
        { url: require('@/assets/wall/1005.jpg') },
        { url: require('@/assets/wall/yh3.jpg') },
        { url: require('@/assets/wall/cz4.jpg') },
      ],
      selectedFile: null,
      uploadStatus: '',
      backgroundImage: require('@/assets/bj3.jpg'),
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
      this.uploadStatus = '已选择文件: ' + this.selectedFile.name
    },
    uploadPhoto() {
      if (!this.selectedFile) return
      
      this.uploadStatus = '上传中...'
      
      const reader = new FileReader()
      reader.onload = (e) => {
        this.photos.unshift({
          url: e.target.result
        })
        this.uploadStatus = '上传成功!'
        this.selectedFile = null
        this.$refs.fileInput.value = ''
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }
}
</script>

<style scoped>
.photo-wall {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
}

.photo-container {
  flex: 1;
  padding: 20px;
  max-width: 1400px;
  margin: 20px auto;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin: 20px 0 30px;
  color: #333;
  font-size: 2.2rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin: 0 auto 40px;
  max-width: 1200px;
}

.photo-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.photo {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.upload-section {
  margin: 30px auto;
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.upload-input {
  display: none;
}

.upload-btn {
  padding: 10px 20px;
  margin: 0 8px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.upload-btn:hover {
  background: linear-gradient(135deg, #5d7df5, #9867d8);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.upload-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.status-message {
  margin-top: 15px;
  color: #666;
}

@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .photo {
    height: 200px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .photo-container {
    width: 95%;
    padding: 15px;
  }
}
</style>