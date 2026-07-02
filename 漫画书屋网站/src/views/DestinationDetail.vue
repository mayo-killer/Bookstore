<template>
  <div class="destination-detail" :style="backgroundStyle">
    <NavBar />
    
    <main class="detail-content">
      <div class="container">
        <h1>{{ destination.name }}</h1>
        <p class="location">{{ destination.location }}</p>
        
        <div class="detail-grid">
          <div class="image-container">
            <img :src="destination.image" :alt="destination.name" class="main-image">
          </div>
          
          <div class="info-container">
            <h2>作品简介</h2>
            <p>{{ destination.description }}</p>
            
            <h2>剧情介绍</h2>
            <p>{{ destination.history }}</p>
          </div>
        </div>
        
        <router-link to="/" class="back-btn">返回首页</router-link>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DestinationDetail',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      destination: {},
      backgroundImage: require('@/assets/bj1.jpg')
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 
        url(${this.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  created() {
    this.fetchDestination()
  },
  methods: {
    fetchDestination() {
      // 模拟API调用，实际项目中应该从API获取数据
      const destinations = [
        {
          id: 1,
          name: '《鬼灭之刃》',
          image: require('@/assets/gm2.jpg'),
          description:'《鬼灭之刃》（日语：鬼滅の刃）是日本漫画家吾峠呼世晴创作的热血少年漫画，于2016年至2020年在《周刊少年Jump》连载，全205话。',
          history: '传说太阳下山后，有恶鬼出没吃人。亦有猎鬼人斩杀恶鬼、保护人们。变成鬼的妹妹，竟然没有吃了男孩反而保护他卖炭少年炭治郎，他那平凡而幸福的日常生活，在家人遭到恶鬼袭击的那一天发生了剧变。母亲与四个弟弟妹妹惨遭杀害，而与他一起生还的妹妹祢豆子亦异变成凶暴的鬼。在猎鬼人的指引下，立志成为猎鬼人的炭治郎与变成鬼却尚存理智的祢豆子踏上了旅程。通过艰苦的剑术修行与赌命试炼，炭治郎成为了猎鬼人组织“鬼杀队”的一员。村庄出现食人鬼，男孩全家被害，他和妹妹何去何从《鬼灭之刃》为了让妹妹祢豆子变回人类，为了讨伐杀害家人的恶鬼，为了斩断悲伤的连锁，少年与鬼的战斗不曾停歇。'
        },
        {
          id: 2,
          name: '《JOJO的奇妙冒险》',
          image: require('@/assets/jo2.jpg'),
          description:'《JOJO的奇妙冒险》（ジョジョの奇妙な冒険）是日本漫画家荒木飞吕彦创作的经典漫画系列，自1987年开始连载至今，以其独特的画风、深刻的角色塑造和创新的战斗系统闻名。JOJO系列凭借其狂野的想象力和不朽的黄金精神，成为跨越时代的经典。无论从剧情、角色还是文化影响力，都堪称日漫史上的“奇妙”标杆。',
          history: '《JOJO的奇妙冒险》主线围绕乔斯达家族（Joestar）与宿敌迪奥·布兰度（DIO）及其影响下的命运斗争展开。故事横跨数百年，从19世纪英国贵族乔纳森·乔斯达与迪奥的恩怨开始，到其子孙后代持续对抗迪奥遗留的邪恶势力。核心脉络：初代（Part 1-3）：乔纳森习得“波纹”对抗吸血鬼迪奥，其子孙乔瑟夫、承太郎继承使命，发展出“替身”能力，最终击败复活的迪奥。新威胁（Part 4-6）：乔斯达血脉分散各地，对抗小镇恶灵（Part 4）、黑帮阴谋（Part 5）和监狱神父的“天堂计划”（Part 6），最终重启世界。平行宇宙（Part 7-9）：新世界中的乔尼·乔斯达参与赛马争夺圣遗骸（Part 7），后续篇章继续探索家族新命运。'
        }, 
        {
          id: 3,
          name: '《东京喰种》',
          image: require('@/assets/cz3.jpg'),
          description:'《东京喰种》（東京喰種トーキョーグール，英文名Tokyo Ghoul）是由日本漫画家石田翠（石田スイ）创作的黑暗奇幻漫画，2011年至2014年在《周刊Young Jump》连载，续作《东京喰种:re》于2014年至2018年连载。故事以人类与喰种（Ghoul）的残酷生存斗争为核心，探讨了人性、身份认同与生存的意义。',
          history: '《东京喰种》讲述大学生金木研因意外变成半人半喰种的悲剧故事。喰种是以人类为食的怪物，金木不得不在人性与本能间挣扎。最初抗拒食人的他，在经历虐待与绝望后彻底黑化，成为强大而冷酷的"眼罩"。第二部《东京喰种:re》中，失忆的金木以搜查官身份重生，最终在人类与喰种的战争中寻求共存之道。作品以黑暗压抑的风格，探讨了身份认同、生存意义等深刻主题，充满血腥战斗与心理挣扎，塑造了极具冲击力的角色蜕变。'
        },
        {
          id: 4,
          name: '《灵能百分百》',
          image: require('@/assets/1002.jpg'),
          description:'《灵能百分百》（日语：モブサイコ100，英文：Mob Psycho 100）是日本漫画家ONE创作的超能力题材少年漫画，于2012年至2017年在网络平台《里Sunday》连载，后被改编为动画、游戏等作品。',
          history: '主角影山茂夫（通称“龙套”/“Mob”）是一名看似平凡的中学生，但实际拥有强大的超能力。他的能力与情绪挂钩，当情感积累到100%时便会爆发，造成无法控制的破坏。为了学会控制能力，他拜师自称灵能力者的骗子灵幻新隆，在解决各种灵异事件的过程中，逐渐成长并面对自我、友情与社会关系。'
        },
        {
          id: 5,
          location:'—— 80%搞笑 / 20%高燃',
          name: '《银魂》',
          image: require('@/assets/yh2.jpg'),
          description:'《银魂》（日语：銀魂，Gintama）是由日本漫画家空知英秋创作的长篇搞笑热血漫画，于2004年起在《周刊少年Jump》连载，2019年移籍至《Jump Giga》，并于同年完结。作品以独特的无厘头搞笑风格、热血战斗和深刻的社会讽刺闻名，被誉为“JUMP系最不按常理出牌的神作”。',
          history: '《银魂》是一部以架空调侃江户时代为背景的搞笑热血漫画，讲述落魄武士坂田银时与伙伴们经营“万事屋”，在混乱的歌舞伎町解决各种奇葩委托的故事。外星人“天人”入侵后，幕府投降，武士没落。银时曾是攘夷战争中的“白夜叉”，如今却成了懒散的甜食控，带着吐槽少年新八和怪力外星少女神乐，一边应付无厘头日常（如帮人找猫、参加电视选秀），一边卷入幕府、真选组、攘夷志士的纷争。作品笑点密集（恶搞《龙珠》《海贼王》等），但主线严肃深刻，探讨武士精神与时代变革。'
          },
        {
          id: 6,
          name: '《齐木楠雄的灾难》',
          image: require('@/assets/qm1.jpg'),
          description:'《齐木楠雄的灾难》（日语：斉木楠雄のΨ難，英文：The Disastrous Life of Saiki K.）是日本漫画家麻生周一创作的搞笑科幻漫画，于2012年至2018年在《周刊少年Jump》连载，后被改编为动画、真人剧等作品。',
          history: '《齐木楠雄的灾难》讲述天生拥有超能力的高中生齐木楠雄，为了追求平凡生活而拼命隐藏自己的能力。然而，他身边却聚集了一群麻烦制造者：笨蛋燃堂力（无法读心的白痴）、中二病海藤瞬（幻想自己是黑暗英雄）、完美美少女照桥心美（坚信“哦呼”效应能征服齐木），以及不靠谱的父母。尽管齐木能用心灵感应、瞬移、念动力等解决任何问题，但每次出手都会引发更爆笑的混乱。这部作品以夸张的吐槽和无厘头日常为核心，展现了一个超能力者“普通生活”的终极灾难！'
        },
        ]
      
      const id = parseInt(this.$route.params.id)
      this.destination = destinations.find(d => d.id === id) || {}
    }
  }
}
</script>

<style scoped>
.destination-detail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.detail-content {
  flex: 1;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 5px;
  font-size: 2.5rem;
}

.location {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
  font-style: italic;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 40px 0;
}

.image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.image-container:hover {
  transform: scale(1.02);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 400px;
}

.info-container h2 {
  color: #2c3e50;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.8rem;
}

.info-container p {
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

.back-btn {
  display: inline-block;
  padding: 12px 25px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .main-image {
    min-height: 300px;
  }
}
</style>