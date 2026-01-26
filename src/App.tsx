import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Thermometer, Users, DollarSign, Star, TrendingUp, AlertCircle, Check, X } from 'lucide-react';

type BalanceRating = 'excellent' | 'good' | 'medium' | 'poor';
type WeatherRating = 'excellent' | 'good' | 'medium' | 'poor';
type CrowdLevel = 'low' | 'medium' | 'high';
type PetFriendlyRating = 'excellent' | 'good' | 'medium' | 'poor';

interface Destination {
  id: number;
  name: string;
  subtitle: string;
  color: string;
  image: string;
  score: number;
  distances: {
    zunyi: { km: number; hours: number; description: string };
    shanghai: { km: number; hours: number; description: string };
  };
  balance: {
    rating: BalanceRating;
    text: string;
    timeDiff: number;
  };
  weather: {
    temp: string;
    condition: string;
    rating: WeatherRating;
  };
  crowd: {
    level: CrowdLevel;
    text: string;
    rating: WeatherRating;
  };
  attractions: string[];
  food: string[];
  budget: {
    accommodation: string;
    food: string;
    attractions: string;
    total: string;
  };
  pros: string[];
  cons: string[];
  petFriendly: {
    rating: PetFriendlyRating;
    text: string;
  };
}

const DestinationComparison: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const destinations: Destination[] = [
    {
      id: 1,
      name: '泉州',
      subtitle: '海丝起点 · 世遗古城',
      color: '#3B82F6',
      image: '🏛️',
      score: 88,
      distances: {
        zunyi: { km: 1520, hours: 18, description: '遵义 → 贵阳 → 长沙 → 泉州' },
        shanghai: { km: 937, hours: 12, description: '上海 → 杭州 → 温州 → 泉州' }
      },
      balance: {
        rating: 'medium',
        text: '上海较近,遵义稍远',
        timeDiff: 6
      },
      weather: {
        temp: '14-19°C',
        condition: '温和舒适',
        rating: 'good'
      },
      crowd: {
        level: 'medium',
        text: '世遗热度高但可控',
        rating: 'good'
      },
      attractions: ['开元寺(世遗)', '清净寺(世遗)', '洛阳桥(世遗)', '西街古城', '崇武古城(看海)'],
      food: ['牛肉羹', '肉粽', '面线糊', '润饼菜', '土笋冻'],
      budget: {
        accommodation: '350-600/晚',
        food: '120-200/人/天',
        attractions: '80-150/人',
        total: '2800-4200/人'
      },
      pros: ['世界文化遗产独特魅力', '海丝文化底蕴深厚', '美食种类丰富多样', '有海滩景观(崇武)', '交通便利性价比高'],
      cons: ['遵义组路程较远', '古城商业化程度增加', '春节部分商家歇业', '住宿旺季价格偏高', '知名度不如厦门'],
      petFriendly: {
        rating: 'good',
        text: '宠物友好,古城街区可携带'
      }
    },
    {
      id: 2,
      name: '汕头/潮汕',
      subtitle: '美食天堂 · 潮汕文化',
      color: '#EF4444',
      image: '🍜',
      score: 90,
      distances: {
        zunyi: { km: 1420, hours: 16, description: '遵义 → 贵阳 → 广州 → 汕头' },
        shanghai: { km: 1250, hours: 14, description: '上海 → 温州 → 福州 → 汕头' }
      },
      balance: {
        rating: 'good',
        text: '距离较均衡,时间相当',
        timeDiff: 2
      },
      weather: {
        temp: '16-22°C',
        condition: '温暖宜人',
        rating: 'excellent'
      },
      crowd: {
        level: 'medium',
        text: '年味浓厚但相对不拥挤',
        rating: 'good'
      },
      attractions: ['南澳岛(看海)', '汕头老城', '潮州古城', '广济桥', '英歌舞表演'],
      food: ['牛肉火锅', '手打牛肉丸', '肠粉', '粿条', '蚝烙'],
      budget: {
        accommodation: '300-500/晚',
        food: '100-180/人/天',
        attractions: '50-150/人',
        total: '2500-3800/人'
      },
      pros: ['美食天堂,性价比极高', '春节氛围浓厚(英歌舞)', '人流相对适中', '海鲜便宜新鲜', '潮汕文化独特'],
      cons: ['景点相对分散', '需要自驾才方便', '方言较难懂', '城市建设相对一般', '知名度不如厦门'],
      petFriendly: {
        rating: 'good',
        text: '宠物友好,大部分区域可携带'
      }
    },
    {
      id: 3,
      name: '顺德',
      subtitle: '世界美食之都 · 岭南水乡',
      color: '#10B981',
      image: '🥘',
      score: 82,
      distances: {
        zunyi: { km: 1100, hours: 13, description: '遵义 → 贵阳 → 南宁 → 顺德' },
        shanghai: { km: 1457, hours: 16, description: '上海 → 南昌 → 广州 → 顺德' }
      },
      balance: {
        rating: 'poor',
        text: '遵义近,上海远',
        timeDiff: 3
      },
      weather: {
        temp: '16-22°C',
        condition: '温暖湿润',
        rating: 'excellent'
      },
      crowd: {
        level: 'medium',
        text: '本地游客为主',
        rating: 'good'
      },
      attractions: ['清晖园(岭南园林)', '逢简水乡', '长鹿旅游休博园', '陈村花卉世界', '顺峰山公园'],
      food: ['双皮奶', '煲仔饭', '鱼生', '均安蒸猪', '陈村粉'],
      budget: {
        accommodation: '300-500/晚',
        food: '120-220/人/天',
        attractions: '80-180/人',
        total: '2600-4000/人'
      },
      pros: ['世界美食之都美食极佳', '岭南文化独特韵味', '距离广州近交通便利', '相对小众人少', '酒店性价比高'],
      cons: ['上海组路程较远', '不靠海没有海滩', '景点相对传统', '年轻人吸引力一般', '春节期间餐厅可能歇业'],
      petFriendly: {
        rating: 'excellent',
        text: '宠物非常友好,水乡公园可携带'
      }
    }
  ];

  const getBalanceColor = (rating: BalanceRating): string => {
    const colors: Record<BalanceRating, string> = {
      excellent: 'text-green-600 bg-green-50',
      good: 'text-blue-600 bg-blue-50',
      medium: 'text-yellow-600 bg-yellow-50',
      poor: 'text-red-600 bg-red-50'
    };
    return colors[rating] || 'text-gray-600 bg-gray-50';
  };

  const getRatingIcon = (rating: BalanceRating): JSX.Element => {
    if (rating === 'excellent' || rating === 'good') return <Check className="w-4 h-4" />;
    if (rating === 'poor') return <X className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  const ComparisonCard: React.FC<{ destination: Destination }> = ({ destination }) => (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
      onClick={() => setSelectedDestination(destination)}
    >
      <div className="p-6 border-b" style={{ backgroundColor: `${destination.color}10` }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-4xl mb-2">{destination.image}</div>
            <h2 className="text-2xl font-bold mb-1">{destination.name}</h2>
            <p className="text-sm text-gray-600">{destination.subtitle}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{destination.score}</span>
            </div>
            <p className="text-xs text-gray-500">综合评分</p>
          </div>
        </div>
      </div>
      <div className="p-6 border-b bg-gray-50">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-red-600">遵</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Navigation className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">{destination.distances.zunyi.km}km</span>
                <Clock className="w-4 h-4 text-gray-400 ml-2" />
                <span className="font-semibold">{destination.distances.zunyi.hours}小时</span>
              </div>
              <p className="text-xs text-gray-500">{destination.distances.zunyi.description}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-blue-600">沪</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Navigation className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">{destination.distances.shanghai.km}km</span>
                <Clock className="w-4 h-4 text-gray-400 ml-2" />
                <span className="font-semibold">{destination.distances.shanghai.hours}小时</span>
              </div>
              <p className="text-xs text-gray-500">{destination.distances.shanghai.description}</p>
            </div>
          </div>
        </div>
        <div className={`mt-4 px-3 py-2 rounded-lg flex items-center gap-2 ${getBalanceColor(destination.balance.rating)}`}>
          {getRatingIcon(destination.balance.rating)}
          <span className="text-sm font-medium">{destination.balance.text}</span>
        </div>
      </div>
      <div className="p-6 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Thermometer className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">天气</span>
          </div>
          <p className="text-sm text-gray-600">{destination.weather.temp}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">人流</span>
          </div>
          <p className="text-sm text-gray-600">{destination.crowd.text.split(',')[0]}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">预算</span>
          </div>
          <p className="text-sm text-gray-600">{destination.budget.total}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">🐕</span>
            <span className="text-sm font-medium">宠物</span>
          </div>
          <p className="text-sm text-gray-600">{destination.petFriendly.rating === 'excellent' ? '很友好' : destination.petFriendly.rating === 'good' ? '友好' : '一般'}</p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button 
          className="w-full py-3 rounded-lg font-medium transition-colors"
          style={{ backgroundColor: destination.color, color: 'white' }}
        >
          查看详情
        </button>
      </div>
    </div>
  );

  const DetailModal: React.FC = () => {
    if (!selectedDestination) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden">
            <div className="p-6 border-b" style={{ backgroundColor: `${selectedDestination.color}10` }}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-5xl mb-3">{selectedDestination.image}</div>
                  <h2 className="text-3xl font-bold mb-2">{selectedDestination.name}</h2>
                  <p className="text-gray-600">{selectedDestination.subtitle}</p>
                </div>
                <button onClick={() => setSelectedDestination(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: selectedDestination.color }} />
                  必去景点
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDestination.attractions.map((item: string, idx: number) => (
                    <div key={idx} className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{item}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">🍜 特色美食</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDestination.food.map((item: string, idx: number) => (
                    <div key={idx} className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{item}</div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-green-600">✓ 优点</h3>
                  <ul className="space-y-2">
                    {selectedDestination.pros.map((item: string, idx: number) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-600">✗ 缺点</h3>
                  <ul className="space-y-2">
                    {selectedDestination.cons.map((item: string, idx: number) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">💰 预算明细</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">住宿</span>
                    <span className="font-medium">{selectedDestination.budget.accommodation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">餐饮</span>
                    <span className="font-medium">{selectedDestination.budget.food}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">门票</span>
                    <span className="font-medium">{selectedDestination.budget.attractions}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>总预算</span>
                    <span style={{ color: selectedDestination.color }}>{selectedDestination.budget.total}</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">🐕 宠物友好度</h3>
                <p className="text-sm text-gray-700">{selectedDestination.petFriendly.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-2">春节旅行目的地对比</h1>
          <p className="text-gray-600 text-sm">2月14日出发 · 5-6天行程 · 两组人汇合</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium mb-1">出行信息</p>
            <p className="text-gray-600">
              <span className="font-medium text-red-600">遵义组:</span>2人1车 · 
              <span className="font-medium text-blue-600 ml-3">上海组:</span>2人1狗1车
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest: Destination) => (
            <ComparisonCard key={dest.id} destination={dest} />
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
            推荐建议
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong className="text-green-600">最推荐:汕头/潮汕</strong> - 距离最均衡(时差仅2小时),美食性价比高,春节氛围浓厚,有海景</p>
            <p><strong className="text-blue-600">备选:泉州</strong> - 世遗古城独特魅力,文化底蕴深厚,但遵义组路程较远(18小时)</p>
            <p><strong className="text-yellow-600">不推荐:顺德</strong> - 上海组路程太远(16小时),而且不靠海,更适合美食深度游</p>
          </div>
        </div>
      </div>
      <DetailModal />
    </div>
  );
};

export default DestinationComparison;
