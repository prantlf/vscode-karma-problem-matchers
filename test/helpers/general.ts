import { contributes } from '../../package.json'

type ProblemMatcherP = {
  name: string
  pattern: { regexp: string }[]
  background: {
    activeOnStart: boolean
    beginsPattern: { regexp: string } | string
    endsPattern: { regexp: string } | string
  }
}

export function findProblemMatcher(problemMatcherName: string) {
  const problemMatchers: ProblemMatcherP[] = contributes.problemMatchers
  const matcherDef = problemMatchers.find(def => def.name === problemMatcherName)
  if (matcherDef === undefined) throw new Error(`Problem matcher "${problemMatcherName}" not found.`)
  return matcherDef
}

export const blobToLines = (blob: string): string[] => blob.trim().split('\n')
