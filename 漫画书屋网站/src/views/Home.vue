<template>
  <div class="home" :style="backgroundStyle">
    <!-- 背景切换控制按钮 -->
    <div class="background-controls">

    </div>
    
    <NavBar />
    
    <main class="main-content">
      <section id="domestic" class="destination-section">
        <h2>热血冒险·生死激斗</h2>
        <div class="destinations-container">
          <DestinationCard 
            v-for="destination in domesticDestinations" 
            :key="destination.id"
            :id="destination.id"
            :name="destination.name"
            :location="destination.location"
            :image="destination.image"
          />
        </div>
      </section>
      
      <section id="international" class="destination-section">
        <h2>超能日常·搞笑治愈</h2>
        <div class="destinations-container">
          <DestinationCard 
            v-for="destination in internationalDestinations" 
            :key="destination.id"
            :id="destination.id"
            :name="destination.name"
            :location="destination.location" 
            :image="destination.image"
          />
        </div>
      </section>

      <div class="photo-wall-btn-container">
        <router-link to="/photo-wall" class="photo-wall-btn">
          <span class="star-icon">★</span> 漫画照片墙★
        </router-link>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import DestinationCard from '@/components/DestinationCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    DestinationCard,
    Footer
  },
  data() {
    return {
      currentBackground: null,
      backgroundOptions: [
        {
         
          image: require('@/assets/bj2.png'),
        },
      ],
      domesticDestinations: [
        {
          id: 1,
          name: '《鬼灭之刃》',
          location: '吾峠呼世晴',
          image: require('@/assets/gm1.jpg'),
        },
        {
          id: 2,
          name: '《JOJO的奇妙冒险》',
          location: '荒木飞吕彦',
          image: require('@/assets/jo1.jpg'),
        },
        {
          id: 3,
          name: '《东京喰种》',
          location: '石田翠',
          image: require('@/assets/cz2.jpg'),
        }
      ],
      internationalDestinations: [
        {
          id: 4,
          name: '《灵能百分百》',
          location: 'ONE',
          image: require('@/assets/1001.jpg'),
        },
        {
          id: 5,
          name: '《银魂》',
          location: '空知英秋',
          image: require('@/assets/yh1.jpg'),
        },
        {
          id: 6,
          name: '《齐木楠雄的灾难》',
          location: '麻生周一',
          image: require('@/assets/qm4.jpg'),
        }
      ]
    }
  },
  created() {
    // 设置默认背景
    this.currentBackground = this.backgroundOptions[0]
    // 尝试从本地存储加载用户背景偏好
    const savedBg = localStorage.getItem('backgroundPreference')
    if (savedBg) {
      const foundBg = this.backgroundOptions.find(bg => bg.image === savedBg)
      if (foundBg) this.currentBackground = foundBg
    }
  },
  computed: {
    backgroundStyle() {
      return {
         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.0)), 
         url(${this.currentBackground.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  methods: {
    changeBackground(bg) {
      this.currentBackground = bg
      // 保存用户偏好到本地存储
      localStorage.setItem('backgroundPreference', bg.image)
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: background-image 0.5s ease;
}

.background-controls {
background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  gap: 10px;
}

.bg-btn {
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.bg-btn:hover {
  background-color: rgba(52, 152, 219, 0.8);
  color: white;
}

.bg-btn.active {
  background-color: #3498db;
  color: white;
}

.main-content {
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
  width: 95%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); 
}

.destination-section {
  margin: 40px 0;
}

.destination-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1a1d21;
}

.destinations-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.photo-wall-btn-container {
  text-align: center;
  margin: 30px 0;
}

.photo-wall-btn {
  display: inline-block;
  padding: 12px 25px;
  background-color: #65aedf;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.photo-wall-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>