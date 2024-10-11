/*import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	if (isRenderClient)
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	else return null
}*/
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const { isRenderClient } = useRenderClient()

  const IconComponent = name ? MaterialIcons[name] : undefined

  if (isRenderClient && IconComponent)
    return <IconComponent />
  else
    return <MaterialIcons.MdDragIndicator />
}

