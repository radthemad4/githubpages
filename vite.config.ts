import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gamingdenbookmarks: resolve(__dirname, 'Gaming_Den_Bookmarks.html'),
        gamingdenalternateclassfeatures: resolve(__dirname, 'gamingdenbookmarks/Alternate_Class_Features.html'),
        gamingdenbaseclasses: resolve(__dirname, 'gamingdenbookmarks/Base_Classes.html'),
        gamingdenclassabilitycomponents: resolve(__dirname, 'gamingdenbookmarks/Class_Ability_Components.html'),
        gamingdenequipment: resolve(__dirname, 'gamingdenbookmarks/Equipment.html'),
        gamingdenfeats: resolve(__dirname, 'gamingdenbookmarks/Feats.html'),
        gamingdenkoumeimonsterprcsindex: resolve(__dirname, 'gamingdenbookmarks/Koumei_Monster_PrCs_Index.html'),
        gamingdenmonsters: resolve(__dirname, 'gamingdenbookmarks/Monsters.html'),
        gamingdennpcclasses: resolve(__dirname, 'gamingdenbookmarks/NPC_Classes.html'),
        gamingdennpcs: resolve(__dirname, 'gamingdenbookmarks/NPCs.html'),
        gamingdenother: resolve(__dirname, 'gamingdenbookmarks/Other.html'),
        gamingdenpokedexredone: resolve(__dirname, 'gamingdenbookmarks/Pokedex_Reborn_Index.html'),
        gamingdenprestigeclasses: resolve(__dirname, 'gamingdenbookmarks/Prestige_Classes.html'),
        gamingdenraces: resolve(__dirname, 'gamingdenbookmarks/Races.html'),
        gamingdenracialparagonclasses: resolve(__dirname, 'gamingdenbookmarks/Racial_Paragon_Classes.html'),
        gamingdenscalingfeats: resolve(__dirname, 'gamingdenbookmarks/Scaling_Feats.html'),
        gamingdensinglepage: resolve(__dirname, 'gamingdenbookmarks/Single_Page.html'),
        gamingdensourcebooks: resolve(__dirname, 'gamingdenbookmarks/Sourcebooks.html'),
        gamingdentemplates: resolve(__dirname, 'gamingdenbookmarks/Templates.html'),
        gamingdenvariantrules: resolve(__dirname, 'gamingdenbookmarks/Variant_Rules.html'),
        kaelikskillgroups: resolve(__dirname, 'Kaelik_Skill_Groups.html'),
        kaelikskillgroupssplit: resolve(__dirname, 'Kaelik_Skill_Groups_Knowledge_Split.html'),
        dndwikitablegenerator: resolve(__dirname, 'dndwiki_table_generator.html'),
        magickadnd: resolve(__dirname, 'magicka-dnd/index.html'),
        whynoclassplosionin5e: resolve(__dirname, 'Why no Classplosion in 5e/Why no Classplosion in 5e.html'),
        crusadermaneuvers: resolve(__dirname, 'crusader-maneuvers/Crusader Maneuvers.html'),
      },
    },
  },
  plugins: [
    react(),
  ],
})