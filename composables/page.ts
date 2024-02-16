export function useCurrentPageState() {
  type AvailablePages = 'bootloader' | 'login' | 'home'
  return useState<AvailablePages>('currentPage', () => 'bootloader')
}
