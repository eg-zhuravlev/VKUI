HorizontalCell автоматически ставит отступы по бокам в зависимости от платформы, поэтому его лучше использовать в [HorizontalScroll](#!/HorizontalScroll).

- При `size='s'` **для iOS** рекомендуется `<Avatar size={64}/>`, а для остальных платформ `<Avatar size={56}/>` или же любой компонент шириной до 64 пикс.
- При `size='m'` рекомендуется `<Avatar size={88} mode='app'/>` или же любой компонент шириной до 96 пикс.
- При `size='l'` рекомендуется `<Avatar size={128} mode='image/>` или же любой компонент произвольной ширины.

```jsx
const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 8,
  border: '1px solid var(--vkui--color_image_placeholder_alpha)',
  objectFit: 'cover',
};

const UserItems = () => {
  const platform = usePlatform();

  return getRandomUsers(15).map((user) => (
    <HorizontalCell size="s" header={user.first_name}>
      <Avatar size={platform === 'ios' ? 64 : 56} src={user.photo_100} />
    </HorizontalCell>
  ));
};

const miniApps = [
  {
    title: 'Промокот',
    icon_139: 'https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg',
  },
  {
    title: 'Разделите счёт',
    icon_139: 'https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg',
  },
  {
    title: 'Рассылки',
    icon_139: 'https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg',
  },
  {
    title: 'Тексты песен',
    icon_139: 'https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg',
  },
];

const MiniAppItems = () => {
  const platform = usePlatform();

  return miniApps.map(({ title, icon_139 }) => (
    <HorizontalCell size="s" header={title}>
      <Image size={platform === 'ios' ? 64 : 56} borderRadius="l" src={icon_139} />
    </HorizontalCell>
  ));
};

const gamesItems = [
  {
    title: 'Контра Сити',
    icon_139: 'https://sun9-24.userapi.com/c639120/v639120173/3fe6f/tgPr7lecAY4.jpg',
  },
  {
    title: 'Golden Valley',
    icon_139: 'https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg',
  },
  {
    title: 'Warma-geddon',
    icon_139: 'https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg',
  },
];

const GamesItems = () => {
  return gamesItems.map(({ title, icon_139 }) => (
    <HorizontalCell size="m" header={title}>
      <Image size={88} borderRadius="l" src={icon_139} />
    </HorizontalCell>
  ));
};

const playlistItems = [
  {
    title: 'Awesome Mix Vol.2',
    description: 'New Tribute Kings',
    photo_300: 'https://sun9-53.userapi.com/c637816/v637816450/4a6d9/lvCvft600Zc.jpg',
  },
  {
    title: 'Сегодня в плеере',
    description: 'Музыка ВКонтакте',
    photo_300: 'https://sun9-4.userapi.com/22uxwvZiO4JhrkSz6j6FEzoJDfZzBjEBVY4ABA/wHAweL65dNI.jpg',
  },
  {
    title: 'Hakuna Matata',
    description: 'Музыка ВКонтакте\n2019',
    photo_300: 'https://sun9-51.userapi.com/c857024/v857024436/f927/rG9fac2cuac.jpg',
  },
];

const PlaylistItems = () => {
  return playlistItems.map(({ title, description, photo_300 }) => (
    <HorizontalCell size="l" header={title} subtitle={description}>
      <Image size={128} src={photo_300} />
    </HorizontalCell>
  ));
};

const albumItems = [
  {
    title: 'Команда <3',
    size: 4,
    thumb_src: 'https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg',
  },
  {
    title: 'Зингер',
    size: 22,
    thumb_src: 'https://sun9-60.userapi.com/bjwt581hETPAp4oY92bDcRvMymyfCaEsnojaUA/_KWQfS-MAd4.jpg',
  },
  {
    title: 'Медиагалерея ВКонтакте',
    size: 64,
    thumb_src: 'https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg',
  },
];

const AlbumItems = () => {
  return albumItems.map(({ title, size, thumb_src }) => (
    <HorizontalCell size="l" header={title} subtitle={`${size} фотографии`}>
      <img style={largeImageStyles} src={thumb_src} />
    </HorizontalCell>
  ));
};

const Example = () => {
  return (
    <View activePanel="horizontalCell">
      <Panel id="horizontalCell">
        <PanelHeader>HorizontalCell</PanelHeader>
        <Group header={<Header>Возможные друзья</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <UserItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Мини-приложения</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <MiniAppItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Игры</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <GamesItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Плейлисты</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <PlaylistItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Альбомы</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <AlbumItems />
            </div>
          </HorizontalScroll>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
