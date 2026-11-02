import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/Sinos De Natal.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "Dead Inside",
				artist: "АДЛИН",
				url: "/assets/music/Dead Inside.m4a",
				cover: "",
				lrc: "",
			},
			{
				name: "Eu Sento Gabu!",
				artist: "PXLWYSE",
				url: "/assets/music/Eu Sento Gabu!.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "HEAVENLY JUMPSTYLE",
				artist: "TWXNY / Sxilwix / INNXCENCE",
				url: "/assets/music/HEAVENLY JUMPSTYLE.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "Masquerade",
				artist: "Lindsey Stirling",
				url: "/assets/music/Masquerade.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "MONTAGEM 486",
				artist: "XRAY / LumynX",
				url: "/assets/music/MONTAGEM 486.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "MONTAGEM ALQUIMIA",
				artist: "h6itam / n7san7os",
				url: "/assets/music/MONTAGEM ALQUIMIA.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "MONTAGEM CORAL (feat. Mc GW, Mc Th & Mc Cyclope)",
				artist: "DJ Holanda / MC GW / Mc Th / Mc Cyclope",
				url: "/assets/music/MONTAGEM CORAL (feat. Mc GW, Mc Th & Mc Cyclope).mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "Nevada",
				artist: "Vicetone / Cozi Zuehlsdorff",
				url: "/assets/music/Nevada.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "NO BATIDÃO",
				artist: "ZxKAI",
				url: "/assets/music/NO BATIDÃO.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "Sinos De Natal",
				artist: "MGD / MXZHPHXNK",
				url: "/assets/music/Sinos De Natal.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "So TIRED",
				artist: "Avery",
				url: "/assets/music/So TIRED.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "SPACE!",
				artist: "NAOMI",
				url: "/assets/music/SPACE!.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "The King",
				artist: "Paperman",
				url: "/assets/music/The King.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "UNICUBE!(硬曲FUNK)",
				artist: "DJ铁柱",
				url: "/assets/music/UNICUBE!(硬曲FUNK).mp3",
				cover: "",
				lrc: "",
			},
		],
	},
};
