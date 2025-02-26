import figlet from 'figlet';
import kleur from 'kleur';

export function showBanner() {
  figlet(
    'README DD',
    { font: 'Mini' },
    (err: Error | null, data: string | undefined) => {
      if (err) {
        console.error(kleur.red('Error generating ASCII text:'), err);
        return;
      }
      if (data) console.log(kleur.cyan(data));
    }
  );
}
