import Page from '@/components/page'
import Section from '@/components/section'
import IngredientListItem from '../components/IngredientListItem'

const Index = () => (
	<Page>
		<Section>
			<IngredientListItem 
				name="Large Egg"
				count={1}
				unit=""
			/>
		</Section>
	</Page>
)

export default Index
